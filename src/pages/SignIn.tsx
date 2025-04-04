
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowRight, LogIn } from "lucide-react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // This is a mock authentication - in a real app, you would connect to a backend
    setTimeout(() => {
      setIsLoading(false);
      if (username.length > 0 && password.length > 0) {
        toast.success("Signed in successfully!");
        navigate("/");
      } else {
        toast.error("Please fill in all fields");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30 p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-2">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-kindness-teal rounded-full animate-pulse"></div>
              <LogIn className="relative z-10 w-12 h-12 text-white p-2.5" />
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent kindness-gradient mb-2">
            Welcome to Lumina
          </h1>
          <p className="text-muted-foreground">Sign in to spread kindness and light</p>
        </div>
        
        <Card className="border-2 shadow-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-kindness-light to-kindness-light/30">
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Enter your credentials to continue</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-kindness-teal hover:bg-kindness-teal/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2 border-t pt-4">
            <div className="text-sm text-center">
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-kindness-teal hover:underline font-medium">
                Create one
              </Link>
            </div>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-1 transition-colors">
              Return to home <ArrowRight className="w-3 h-3" />
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
