
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-kindness-light/50 p-4 text-center">
      <div className="mb-6">
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 bg-kindness-teal rounded-full animate-pulse"></div>
          <Heart className="relative z-10 w-20 h-20 text-white" fill="white" />
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-kindness-purple">Oops! Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-6">
        It seems this path is not part of our kindness chain.
      </p>
      <Button
        className="rounded-full bg-kindness-teal hover:bg-kindness-teal/90 px-6"
        asChild
      >
        <a href="/">Return to Home</a>
      </Button>
    </div>
  );
};

export default NotFound;

