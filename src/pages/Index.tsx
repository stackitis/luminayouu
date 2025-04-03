
import { useState } from "react";
import Navbar from "@/components/Navbar";
import KindnessCard from "@/components/KindnessCard";
import KindnessChain from "@/components/KindnessChain";
import KindnessSuggestions from "@/components/KindnessSuggestions";
import UserStats from "@/components/UserStats";
import LogKindnessForm from "@/components/LogKindnessForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Index = () => {
  const [showKindnessForm, setShowKindnessForm] = useState(false);

  // Sample data for the components
  const kindnessData = [
    {
      id: "1",
      author: {
        name: "Emma Johnson",
        initials: "EJ",
      },
      timestamp: "2 hours ago",
      content: "Helped an elderly neighbor carry groceries from their car to their house. They were so grateful and it made my day!",
      impactCount: 12,
      chainLength: 3,
    },
    {
      id: "2",
      author: {
        name: "Michael Chen",
        initials: "MC",
      },
      timestamp: "Yesterday",
      content: "Bought coffee for the person behind me in line this morning. The barista said they ended up doing the same for the next person!",
      impactCount: 24,
      chainLength: 5,
      imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1737&q=80",
    },
    {
      id: "3",
      author: {
        name: "Sarah Williams",
        initials: "SW",
      },
      timestamp: "2 days ago",
      content: "Volunteered at the animal shelter today. Walked dogs and gave lots of cuddles to cats waiting for their forever homes.",
      impactCount: 36,
      chainLength: 2,
    },
  ];

  const chainVisualizationData = {
    nodes: [
      { id: "you", color: "#2DD4BF", size: 10, x: 400, y: 200 },
      { id: "1", color: "#9B87F5", size: 8, x: 300, y: 150 },
      { id: "2", color: "#9B87F5", size: 8, x: 500, y: 150 },
      { id: "3", color: "#9B87F5", size: 8, x: 350, y: 250 },
      { id: "4", color: "#9B87F5", size: 8, x: 450, y: 250 },
      { id: "5", color: "#FEC6A1", size: 6, x: 250, y: 120 },
      { id: "6", color: "#FEC6A1", size: 6, x: 350, y: 100 },
      { id: "7", color: "#FEC6A1", size: 6, x: 550, y: 120 },
      { id: "8", color: "#FEC6A1", size: 6, x: 300, y: 300 },
      { id: "9", color: "#FEC6A1", size: 6, x: 400, y: 300 },
      { id: "10", color: "#FEC6A1", size: 6, x: 500, y: 300 },
    ],
    links: [
      { source: "you", target: "1" },
      { source: "you", target: "2" },
      { source: "you", target: "3" },
      { source: "you", target: "4" },
      { source: "1", target: "5" },
      { source: "1", target: "6" },
      { source: "2", target: "7" },
      { source: "3", target: "8" },
      { source: "4", target: "9" },
      { source: "4", target: "10" },
    ],
  };

  const userStats = {
    kindnessCount: 27,
    chainLength: 8,
    impact: 53,
    streak: 5,
    nextBadge: {
      name: "Kindness Champion",
      progress: 70,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-kindness-light/30">
      <Navbar />

      {/* Main content */}
      <main className="container pt-20 pb-24 md:py-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feed - Left column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-kindness-teal">Kindness Feed</h2>
              <Button 
                className="rounded-full bg-kindness-teal hover:bg-kindness-teal/90 md:hidden"
                onClick={() => setShowKindnessForm(true)}
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Kindness
              </Button>
            </div>
            
            {/* Kindness Chain Visualization */}
            <div className="h-64 mb-6">
              <h3 className="text-lg font-medium mb-2">Your Kindness Chain</h3>
              <KindnessChain data={chainVisualizationData} />
            </div>
            
            {/* Kindness Cards */}
            <div className="space-y-4">
              {kindnessData.map((kindness) => (
                <KindnessCard key={kindness.id} {...kindness} />
              ))}
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            <div className="hidden md:block">
              <Button
                className="w-full rounded-xl bg-kindness-teal hover:bg-kindness-teal/90 h-12 text-lg"
                onClick={() => setShowKindnessForm(true)}
              >
                <Plus className="w-5 h-5 mr-2" />
                Log an Act of Kindness
              </Button>
            </div>
            
            {/* User Stats */}
            <UserStats stats={userStats} />
            
            {/* Kindness Suggestions */}
            <KindnessSuggestions />
            
            {/* Leaderboard Teaser */}
            <Card className="border-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Weekly Leaders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-kindness-light/50 rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-kindness-purple text-white flex items-center justify-center font-bold">
                        1
                      </div>
                      <span>Emma J.</span>
                    </div>
                    <span className="font-medium">12 acts</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-kindness-orange text-white flex items-center justify-center font-bold">
                        2
                      </div>
                      <span>Alex T.</span>
                    </div>
                    <span className="font-medium">10 acts</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-kindness-teal text-white flex items-center justify-center font-bold">
                        3
                      </div>
                      <span>Sarah W.</span>
                    </div>
                    <span className="font-medium">9 acts</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Add Kindness Dialog */}
      <Dialog open={showKindnessForm} onOpenChange={setShowKindnessForm}>
        <DialogContent className="sm:max-w-md">
          <LogKindnessForm onClose={() => setShowKindnessForm(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
