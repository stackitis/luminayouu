
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, MapPin, Award, Plus, LogIn } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    const path = location.pathname;
    if (path === "/") return "feed";
    if (path === "/network") return "network";
    if (path === "/map") return "map";
    if (path === "/achievements") return "achievements";
    return "feed"; // default
  });

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-10 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-kindness-teal rounded-full animate-pulse"></div>
              <Heart className="relative z-10 w-8 h-8 text-white" fill="white" />
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent kindness-gradient">
              Lumina
            </h1>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-1">
          <Link to="/">
            <Button 
              variant={activeTab === "feed" ? "default" : "ghost"} 
              onClick={() => setActiveTab("feed")}
              className="rounded-full"
            >
              <Heart className="w-4 h-4 mr-2" />
              Feed
            </Button>
          </Link>
          <Link to="/network">
            <Button 
              variant={activeTab === "network" ? "default" : "ghost"} 
              onClick={() => setActiveTab("network")}
              className="rounded-full"
            >
              <Users className="w-4 h-4 mr-2" />
              Network
            </Button>
          </Link>
          <Link to="/map">
            <Button 
              variant={activeTab === "map" ? "default" : "ghost"} 
              onClick={() => setActiveTab("map")}
              className="rounded-full"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Map
            </Button>
          </Link>
          <Link to="/achievements">
            <Button 
              variant={activeTab === "achievements" ? "default" : "ghost"} 
              onClick={() => setActiveTab("achievements")}
              className="rounded-full"
            >
              <Award className="w-4 h-4 mr-2" />
              Achievements
            </Button>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/sign-in">
            <Button variant="outline" className="rounded-full">
              <LogIn className="w-4 h-4 mr-2" /> 
              Sign In
            </Button>
          </Link>
          <Button className="rounded-full bg-kindness-teal hover:bg-kindness-teal/90">
            <Plus className="w-5 h-5 mr-2" />
            Add Light
          </Button>
        </div>
      </div>
      
      {/* Mobile bottom navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-2 z-10">
        <Link to="/">
          <Button variant={activeTab === "feed" ? "default" : "ghost"} onClick={() => setActiveTab("feed")} className="flex-1">
            <Heart className="w-5 h-5" />
          </Button>
        </Link>
        <Link to="/network">
          <Button variant={activeTab === "network" ? "default" : "ghost"} onClick={() => setActiveTab("network")} className="flex-1">
            <Users className="w-5 h-5" />
          </Button>
        </Link>
        <Button variant="outline" onClick={() => {}} className="flex-1 rounded-full bg-kindness-teal text-white border-none">
          <Plus className="w-6 h-6" />
        </Button>
        <Link to="/map">
          <Button variant={activeTab === "map" ? "default" : "ghost"} onClick={() => setActiveTab("map")} className="flex-1">
            <MapPin className="w-5 h-5" />
          </Button>
        </Link>
        <Link to="/achievements">
          <Button variant={activeTab === "achievements" ? "default" : "ghost"} onClick={() => setActiveTab("achievements")} className="flex-1">
            <Award className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
