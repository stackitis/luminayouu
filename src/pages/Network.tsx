
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import KindnessChatbot from "@/components/KindnessChatbot";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Network as NetworkIcon, Users, UserPlus, Plus } from "lucide-react";

const Network = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const connections = [
    { id: 1, name: "Emma Johnson", initials: "EJ", kindnessCount: 27, isActive: true },
    { id: 2, name: "Michael Chen", initials: "MC", kindnessCount: 24, isActive: false },
    { id: 3, name: "Sarah Williams", initials: "SW", kindnessCount: 36, isActive: true },
    { id: 4, name: "David Thompson", initials: "DT", kindnessCount: 19, isActive: false },
    { id: 5, name: "Olivia Martinez", initials: "OM", kindnessCount: 31, isActive: true },
  ];

  const suggestedConnections = [
    { id: 6, name: "James Wilson", initials: "JW", kindnessCount: 15 },
    { id: 7, name: "Sophia Lee", initials: "SL", kindnessCount: 22 },
    { id: 8, name: "Noah Garcia", initials: "NG", kindnessCount: 18 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-kindness-light/30">
      <Navbar />

      <main className={`container pt-20 pb-24 md:py-20 px-4 ${fadeIn ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2 mb-6">
              <NetworkIcon className="w-5 h-5 text-kindness-teal" />
              <h2 className="text-2xl font-bold text-kindness-teal">Your Kindness Network</h2>
            </div>

            <Card className="border-2 border-kindness-light/80 shadow-lg overflow-hidden">
              <CardHeader className="pb-2 bg-gradient-to-r from-kindness-light to-kindness-light/50">
                <CardTitle className="text-lg font-medium">Active Connections</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {connections.map((connection) => (
                    <div 
                      key={connection.id} 
                      className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                            connection.isActive ? 'bg-kindness-teal' : 'bg-kindness-purple/70'
                          }`}
                        >
                          {connection.initials}
                        </div>
                        <div>
                          <p className="font-medium">{connection.name}</p>
                          <p className="text-sm text-gray-500">{connection.kindnessCount} acts of kindness</p>
                        </div>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${connection.isActive ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-kindness-light/80 shadow-lg overflow-hidden">
              <CardHeader className="pb-2 bg-gradient-to-r from-kindness-light to-kindness-light/50">
                <CardTitle className="text-lg font-medium">Suggested Connections</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {suggestedConnections.map((connection) => (
                    <div 
                      key={connection.id} 
                      className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-kindness-orange/70 text-white flex items-center justify-center font-bold">
                          {connection.initials}
                        </div>
                        <div>
                          <p className="font-medium">{connection.name}</p>
                          <p className="text-sm text-gray-500">{connection.kindnessCount} acts of kindness</p>
                        </div>
                      </div>
                      <button className="p-2 bg-kindness-teal/10 text-kindness-teal rounded-full hover:bg-kindness-teal/20 transition-colors">
                        <UserPlus className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-kindness-light/80 overflow-hidden shadow-lg">
              <CardHeader className="pb-2 bg-gradient-to-r from-kindness-light to-kindness-light/50">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="w-5 h-5" />
                  Network Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Connections</span>
                    <span className="font-bold text-lg">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Active Now</span>
                    <span className="font-bold text-lg">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Network Reach</span>
                    <span className="font-bold text-lg">127</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Combined Acts</span>
                    <span className="font-bold text-lg">137</span>
                  </div>
                  <div className="h-1 kindness-gradient mt-4 mb-2"></div>
                  
                  {/* Add New Network button */}
                  <Button 
                    className="w-full mt-2 bg-kindness-teal hover:bg-kindness-teal/90 text-white flex items-center justify-center gap-2"
                    variant="default"
                  >
                    <Plus className="w-4 h-4" />
                    Add New Network
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Add KindnessChatbot here */}
      <KindnessChatbot />
    </div>
  );
};

export default Network;
