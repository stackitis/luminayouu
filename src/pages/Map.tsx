
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map as MapIcon } from "lucide-react";
import KindnessChain from "@/components/KindnessChain";
import KindnessChatbot from "@/components/KindnessChatbot";

const Map = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  // Sample data for the kindness chain visualization
  const kindnessChainData = {
    nodes: [
      { id: "you", color: "#2DD4BF", size: 12, x: 400, y: 200 },
      { id: "emma", color: "#9B87F5", size: 8, x: 250, y: 120 },
      { id: "sarah", color: "#9B87F5", size: 8, x: 300, y: 320 },
      { id: "olivia", color: "#9B87F5", size: 8, x: 550, y: 180 },
      { id: "james", color: "#FEC6A1", size: 6, x: 150, y: 80 },
      { id: "noah", color: "#FEC6A1", size: 6, x: 200, y: 370 },
      { id: "michael", color: "#FEC6A1", size: 6, x: 650, y: 220 },
      { id: "sophia", color: "#FEC6A1", size: 6, x: 480, y: 90 },
      { id: "david", color: "#FEC6A1", size: 6, x: 440, y: 330 },
    ],
    links: [
      { source: "you", target: "emma" },
      { source: "you", target: "sarah" },
      { source: "you", target: "olivia" },
      { source: "emma", target: "james" },
      { source: "sarah", target: "noah" },
      { source: "olivia", target: "michael" },
      { source: "olivia", target: "sophia" },
      { source: "sarah", target: "david" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-kindness-light/30">
      <Navbar />

      <main className={`container pt-20 pb-24 md:py-20 px-4 ${fadeIn ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="space-y-6">
          <div className="flex items-center space-x-2 mb-6">
            <MapIcon className="w-5 h-5 text-kindness-teal" />
            <h2 className="text-2xl font-bold text-kindness-teal">Your Light Chain Map</h2>
          </div>

          <Card className="border-2 border-kindness-light/80 shadow-lg overflow-hidden">
            <CardHeader className="pb-2 bg-gradient-to-r from-kindness-light to-kindness-light/50">
              <CardTitle className="text-lg font-medium">Visualizing Your Kindness Impact</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="w-full h-[500px] rounded-lg overflow-hidden">
                <KindnessChain data={kindnessChainData} />
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/80 p-4 rounded-lg shadow">
                  <h3 className="font-medium text-kindness-teal">Direct Connections</h3>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-gray-500">People you've directly impacted</p>
                </div>
                <div className="bg-white/80 p-4 rounded-lg shadow">
                  <h3 className="font-medium text-kindness-purple">Secondary Connections</h3>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-gray-500">People impacted through your network</p>
                </div>
                <div className="bg-white/80 p-4 rounded-lg shadow">
                  <h3 className="font-medium text-kindness-orange">Total Reach</h3>
                  <p className="text-2xl font-bold">27</p>
                  <p className="text-sm text-gray-500">Including extended network impact</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-kindness-light/80 shadow-lg overflow-hidden">
            <CardHeader className="pb-2 bg-gradient-to-r from-kindness-light to-kindness-light/50">
              <CardTitle className="text-lg font-medium">Light Chain Legend</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-kindness-teal"></div>
                  <span>You</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-kindness-purple"></div>
                  <span>Direct Connections</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-kindness-orange"></div>
                  <span>Secondary Connections</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Add KindnessChatbot here */}
      <KindnessChatbot />
    </div>
  );
};

export default Map;
