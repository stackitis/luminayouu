
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, RefreshCcw, Check, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface KindnessSuggestion {
  id: string;
  text: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
}

const suggestions: KindnessSuggestion[] = [
  { id: "1", text: "Buy a coffee for the person behind you in line", category: "stranger", difficulty: "easy" },
  { id: "2", text: "Leave a positive note on someone's windshield", category: "community", difficulty: "easy" },
  { id: "3", text: "Help an elderly neighbor with yard work", category: "neighborhood", difficulty: "medium" },
  { id: "4", text: "Volunteer at a local animal shelter", category: "community", difficulty: "medium" },
  { id: "5", text: "Organize a neighborhood cleanup day", category: "environment", difficulty: "hard" },
];

const KindnessSuggestions = () => {
  const [currentSuggestion, setCurrentSuggestion] = useState<KindnessSuggestion>(suggestions[0]);
  const [accepted, setAccepted] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const getNewSuggestion = () => {
    setIsRotating(true);
    setTimeout(() => {
      const nextSuggestion = suggestions.find(s => s.id !== currentSuggestion.id);
      if (nextSuggestion) {
        setCurrentSuggestion(nextSuggestion);
        setAccepted(false);
      }
      setIsRotating(false);
    }, 600);
  };

  const handleAccept = () => {
    setAccepted(true);
  };

  const difficultyColor = {
    easy: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    hard: "bg-red-100 text-red-800",
  };

  return (
    <Card className="border-2 overflow-hidden shadow-lg">
      <CardHeader className="pb-2 bg-gradient-to-r from-kindness-light to-kindness-light/50">
        <CardTitle className="text-lg flex items-center">
          <Lightbulb className="h-5 w-5 mr-2 text-kindness-teal" />
          <span className="text-kindness-teal">Daily Kindness Challenge</span>
          {accepted && <Check className="ml-2 h-5 w-5 text-green-500" />}
        </CardTitle>
        <CardDescription>Try something new today</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className={`transition-all duration-500 ${isRotating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <p className="text-base font-medium">{currentSuggestion.text}</p>
          <div className="flex gap-2 mt-3">
            <Badge variant="outline" className="bg-kindness-light text-kindness-purple border-none">
              {currentSuggestion.category}
            </Badge>
            <Badge
              variant="outline"
              className={`${difficultyColor[currentSuggestion.difficulty]} border-none`}
            >
              {currentSuggestion.difficulty}
            </Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 border-t border-kindness-light/50">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={getNewSuggestion} 
          disabled={accepted}
          className="hover:bg-kindness-light/50"
        >
          <RefreshCcw className={`h-4 w-4 mr-1 transition-transform duration-500 ${isRotating ? 'rotate-180' : ''}`} />
          New suggestion
        </Button>
        <Button 
          className={`${accepted ? 'bg-green-500' : 'bg-kindness-purple'} hover:bg-kindness-purple/90 transition-colors duration-300`} 
          size="sm"
          onClick={handleAccept}
          disabled={accepted}
        >
          {accepted ? "Challenge Accepted" : "Accept Challenge"}
          {!accepted && <ArrowRight className="h-4 w-4 ml-1" />}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default KindnessSuggestions;
