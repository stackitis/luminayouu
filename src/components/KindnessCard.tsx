
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface KindnessCardProps {
  id: string;
  author: {
    name: string;
    avatar?: string;
    initials: string;
  };
  timestamp: string;
  content: string;
  impactCount: number;
  chainLength: number;
  imageUrl?: string;
}

const KindnessCard = ({
  id,
  author,
  timestamp,
  content,
  impactCount,
  chainLength,
  imageUrl,
}: KindnessCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(impactCount);
  const [expanded, setExpanded] = useState(false);
  
  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked((prev) => !prev);
  };

  return (
    <Card className="mb-4 overflow-hidden border-2 border-muted hover:border-muted/80 transition-all duration-300 shadow-lg">
      <CardHeader className="pb-2 pt-4 px-4 flex flex-row items-center gap-3">
        <Avatar className="h-10 w-10 border-2 border-kindness-teal pulse-glow">
          {author.avatar ? (
            <img src={author.avatar} alt={author.name} />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-full bg-kindness-purple text-white">
              {author.initials}
            </div>
          )}
        </Avatar>
        <div>
          <p className="font-semibold text-kindness-purple">{author.name}</p>
          <p className="text-xs text-muted-foreground">{timestamp}</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Badge className="px-2 py-1 rounded-full bg-kindness-light border-none text-kindness-purple">
            <span className="text-xs font-medium flex items-center">
              Chain: {chainLength} <ChevronUp className="ml-1 h-3 w-3" />
            </span>
          </Badge>
          <div className="relative w-3 h-3 ml-1">
            <div className="absolute inset-0 w-full h-full bg-kindness-orange rounded-full animate-ping opacity-75"></div>
            <div className="relative w-full h-full bg-kindness-orange rounded-full"></div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pt-2 pb-4">
        <p className={`text-sm ${expanded ? '' : 'line-clamp-4'}`}>{content}</p>
        {content.length > 150 && !expanded && (
          <button 
            onClick={() => setExpanded(true)} 
            className="text-xs text-kindness-teal mt-1 hover:underline"
          >
            Read more
          </button>
        )}
        {imageUrl && (
          <div className="mt-3 rounded-lg overflow-hidden">
            <img src={imageUrl} alt="Act of kindness" className="w-full h-auto hover:scale-105 transition-transform duration-300" />
          </div>
        )}
      </CardContent>
      <div className="h-2 kindness-gradient"></div>
      <CardFooter className="flex justify-between px-4 py-3 border-t border-muted bg-muted/20">
        <Button
          variant="ghost"
          size="sm"
          className={`gap-1 ${liked ? "text-kindness-teal" : ""}`}
          onClick={handleLike}
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-kindness-teal" : ""} transition-transform duration-300 ${liked ? 'scale-125' : ''}`} />
          <span>{likeCount}</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-1">
          <MessageCircle className="h-4 w-4" />
          <span>Comment</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-1">
          <Share2 className="h-4 w-4" />
          <span>Pass it on</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default KindnessCard;
