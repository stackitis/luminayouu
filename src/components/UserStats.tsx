
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";

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
    <Card className="border-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Your Kindness Impact</CardTitle>
        <CardDescription>Keep up the great work!</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col items-center p-3 bg-kindness-light rounded-lg">
            <span className="text-2xl font-bold text-kindness-teal">{stats.kindnessCount}</span>
            <span className="text-xs text-muted-foreground">Acts of Kindness</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-kindness-light rounded-lg">
            <span className="text-2xl font-bold text-kindness-purple">{stats.chainLength}</span>
            <span className="text-xs text-muted-foreground">Longest Chain</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-kindness-light rounded-lg">
            <span className="text-2xl font-bold text-kindness-orange">{stats.impact}</span>
            <span className="text-xs text-muted-foreground">People Impacted</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-kindness-light rounded-lg">
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
          <Progress value={stats.nextBadge.progress} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
};

export default UserStats;
