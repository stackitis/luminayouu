
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star, Award, Heart, Zap } from "lucide-react";

interface UserStatsProps {
  stats: {
    kindnessCount: number;
    chainLength: number;
    impact: number;
    streak: number;
    nextBadge: {
      name: string;
      progress: number;
    };
  };
}

const UserStats = ({ stats }: UserStatsProps) => {
  return (
    <Card className="border-2 overflow-hidden shadow-lg">
      <CardHeader className="pb-2 bg-gradient-to-r from-kindness-light to-kindness-light/50">
        <CardTitle className="text-lg flex items-center">
          <Award className="h-5 w-5 mr-2 text-kindness-teal" />
          Your Kindness Impact
        </CardTitle>
        <CardDescription>Keep up the great work!</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col items-center p-3 bg-kindness-light rounded-lg hover:shadow-md transition-all duration-300">
            <Heart className="h-5 w-5 text-kindness-teal mb-1" />
            <span className="text-2xl font-bold text-kindness-teal">{stats.kindnessCount}</span>
            <span className="text-xs text-muted-foreground">Acts of Light</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-kindness-light rounded-lg hover:shadow-md transition-all duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" className="mb-1 text-kindness-purple">
              <path fill="currentColor" d="M7,13H9V17H7V13M12,13H14V20H12V13M17,13H19V15H17V13M12,2L4.5,9.5L7,12V21H17V12L19.5,9.5L12,2Z" />
            </svg>
            <span className="text-2xl font-bold text-kindness-purple">{stats.chainLength}</span>
            <span className="text-xs text-muted-foreground">Longest Chain</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-kindness-light rounded-lg hover:shadow-md transition-all duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" className="mb-1 text-kindness-orange">
              <path fill="currentColor" d="M16,5V11H21V5H16M10,11H15V5H10V11M16,18H21V12H16V18M10,18H15V12H10V18M4,18H9V12H4V18M4,11H9V5H4V11Z" />
            </svg>
            <span className="text-2xl font-bold text-kindness-orange">{stats.impact}</span>
            <span className="text-xs text-muted-foreground">People Impacted</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-kindness-light rounded-lg hover:shadow-md transition-all duration-300">
            <Zap className="h-5 w-5 text-kindness-teal mb-1" />
            <span className="text-2xl font-bold text-kindness-teal">{stats.streak}</span>
            <span className="text-xs text-muted-foreground">Day Streak</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium flex items-center">
              <Star className="h-4 w-4 mr-1 text-yellow-500" fill="currentColor" />
              {stats.nextBadge.name}
            </span>
            <span className="text-xs text-muted-foreground">
              {stats.nextBadge.progress}%
            </span>
          </div>
          <div className="relative">
            <Progress value={stats.nextBadge.progress} className="h-2" />
            <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2">
              <div className={`h-4 w-4 rounded-full ${stats.nextBadge.progress >= 100 ? 'bg-yellow-500' : 'bg-muted'} border-2 border-white`}></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserStats;
