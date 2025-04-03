
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, Calendar, Users, Share2, Award, MapPin, Star } from "lucide-react";
import Navbar from "@/components/Navbar";

interface KindnessAct {
  id: string;
  timeframe: string;
  location: string;
  description: string;
  likes: number;
}

const Achievements = () => {
  const [userActs, setUserActs] = useState<KindnessAct[]>([
    {
      id: "1",
      timeframe: "Today",
      location: "New York, USA",
      description: "Volunteered at the local animal shelter, walking dogs that haven't been outside in a while.",
      likes: 34
    },
    {
      id: "2",
      timeframe: "1 week ago",
      location: "New York, USA",
      description: "Donated books to the children's hospital for their reading program.",
      likes: 56
    },
    {
      id: "3",
      timeframe: "2 weeks ago",
      location: "New York, USA",
      description: "Helped a coworker finish a project when they were running behind deadline.",
      likes: 17
    }
  ]);

  const userProfile = {
    name: "Alex Johnson",
    memberSince: "January 2023",
    acts: 12,
    streak: 5,
    impact: 245,
    avatar: "/lovable-uploads/204633ed-542e-455a-b7d6-a46242b3ae40.png"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-kindness-light via-white to-kindness-light/30">
      <Navbar />
      
      <main className="container pt-24 pb-20 px-4 max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-12 relative animate-fade-in">
          <div className="w-32 h-32 rounded-full border-4 border-kindness-teal overflow-hidden bg-white mb-4 shadow-lg hover:scale-105 transition-transform duration-300">
            <Avatar className="w-full h-full">
              <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-kindness-purple">
                {userProfile.avatar ? (
                  <AvatarImage src={userProfile.avatar} alt={userProfile.name} className="w-full h-full object-cover" />
                ) : (
                  userProfile.name.charAt(0)
                )}
              </div>
            </Avatar>
          </div>
          
          <h1 className="text-3xl font-bold mb-1 bg-clip-text text-transparent kindness-gradient">{userProfile.name}</h1>
          <p className="text-muted-foreground mb-6">Member since {userProfile.memberSince}</p>
          
          <div className="flex gap-3 flex-wrap justify-center mb-6">
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md border hover:shadow-lg hover:scale-105 transition-all duration-300">
              <Heart className="h-5 w-5 mr-2 text-kindness-teal" fill="#FF69B4" />
              <span className="font-medium">{userProfile.acts} Acts</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md border hover:shadow-lg hover:scale-105 transition-all duration-300">
              <Calendar className="h-5 w-5 mr-2 text-kindness-purple" />
              <span className="font-medium">{userProfile.streak} Day Streak</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md border hover:shadow-lg hover:scale-105 transition-all duration-300">
              <Users className="h-5 w-5 mr-2 text-kindness-orange" />
              <span className="font-medium">{userProfile.impact} Impact</span>
            </div>
          </div>
          
          <Button className="rounded-full bg-kindness-teal hover:bg-kindness-teal/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            <Share2 className="w-4 h-4 mr-2" />
            Share Profile
          </Button>
        </div>

        {/* Acts of Kindness */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center animate-fade-in">
            <span className="bg-kindness-light p-2 rounded-full mr-2">
              <Heart className="h-5 w-5 text-kindness-teal" fill="#FF69B4" />
            </span>
            Your Acts of Light
          </h2>
          
          <div className="space-y-5">
            {userActs.map((act, index) => (
              <Card 
                key={act.id} 
                className="border-2 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
                style={{
                  animationDelay: `${index * 150}ms`,
                  opacity: 0,
                  animation: "fade-in 0.5s ease-out forwards"
                }}
              >
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 text-kindness-purple" />
                      <span>{act.timeframe}</span>
                      <span>•</span>
                      <MapPin className="h-4 w-4 text-kindness-orange" />
                      <span>{act.location}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-kindness-light px-3 py-1 rounded-full">
                      <Heart className="h-4 w-4 text-kindness-teal" fill="#FF69B4" />
                      <span className="text-xs font-medium">{act.likes}</span>
                    </div>
                  </div>
                  <p className="text-sm mt-2">{act.description}</p>
                </div>
                <div className="h-1.5 kindness-gradient"></div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Badges Section */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-kindness-light p-2 rounded-full mr-2">
              <Award className="h-5 w-5 text-kindness-purple" />
            </span>
            Achievements
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg border-2 border-kindness-teal p-4 flex flex-col items-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-kindness-light to-kindness-teal/30 rounded-full flex items-center justify-center mb-3 shadow-inner">
                <Heart className="h-8 w-8 text-kindness-teal" fill="#FF69B4" />
              </div>
              <Badge variant="default" className="bg-kindness-teal mb-1">Earned</Badge>
              <span className="font-medium text-center">First Light</span>
            </div>
            
            <div className="bg-white rounded-lg border-2 border-kindness-teal p-4 flex flex-col items-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-kindness-light to-kindness-teal/30 rounded-full flex items-center justify-center mb-3 shadow-inner">
                <Calendar className="h-8 w-8 text-kindness-teal" />
              </div>
              <Badge variant="default" className="bg-kindness-teal mb-1">Earned</Badge>
              <span className="font-medium text-center">5 Day Streak</span>
            </div>
            
            <div className="bg-white rounded-lg border-2 border-kindness-light/80 p-4 flex flex-col items-center opacity-80 shadow-md hover:shadow hover:opacity-90 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-kindness-light/50 to-white rounded-full flex items-center justify-center mb-3 shadow-inner">
                <Users className="h-8 w-8 text-kindness-purple/70" />
              </div>
              <Badge variant="outline" className="mb-1">In progress</Badge>
              <span className="font-medium text-center">100 Impact</span>
              <div className="w-full bg-kindness-light rounded-full h-1.5 mt-2">
                <div className="bg-kindness-purple h-1.5 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border-2 border-kindness-light/80 p-4 flex flex-col items-center opacity-80 shadow-md hover:shadow hover:opacity-90 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-kindness-light/50 to-white rounded-full flex items-center justify-center mb-3 shadow-inner">
                <Heart className="h-8 w-8 text-kindness-purple/70" />
              </div>
              <Badge variant="outline" className="mb-1">In progress</Badge>
              <span className="font-medium text-center">10 Acts</span>
              <div className="w-full bg-kindness-light rounded-full h-1.5 mt-2">
                <div className="bg-kindness-purple h-1.5 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Simple Footer */}
      <footer className="border-t py-6 bg-white/80 backdrop-blur-sm fixed bottom-0 w-full">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-kindness-teal" fill="#FF69B4" />
              <span className="font-medium">Lumina</span>
            </div>
            <p className="text-sm text-muted-foreground">Creating a global chain of kindness, one act at a time.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="rounded-full p-2 h-auto hover:bg-kindness-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full p-2 h-auto hover:bg-kindness-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full p-2 h-auto hover:bg-kindness-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Achievements;
