
import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Bot, ArrowDown, XCircle, MinusCircle, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "framer-motion";

// Types for messages
interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Suggestions for kindness acts
const kindnessSuggestions = [
  "Have you considered volunteering at your local food bank this weekend?",
  "A simple compliment can brighten someone's day. Try giving three compliments today!",
  "Consider writing a thank you note to someone who has helped you recently.",
  "Leave positive reviews for local businesses you appreciate.",
  "Share your skills by teaching someone something new today.",
  "Listen actively to someone who needs to talk.",
  "Send an encouraging message to someone going through a tough time.",
  "Donate items you no longer need to those who could use them.",
  "Check in on an elderly neighbor and see if they need anything.",
  "Pick up litter in your community during your next walk.",
];

// Motivational messages
const motivationalMessages = [
  "Your kindness creates ripples that reach further than you'll ever know!",
  "Every act of kindness, no matter how small, changes the world for someone.",
  "Remember: what you do matters and impacts countless others.",
  "The light you share illuminates the path for others to follow.",
  "You're making the world better simply by being the kind person you are.",
  "Your compassion inspires others to act with kindness too!",
  "The world needs exactly what you have to offer – your unique brand of kindness.",
  "Small acts of kindness add up to create massive change.",
  "You never know how a single kind gesture might change someone's life.",
  "Today's kindness becomes tomorrow's hope.",
];

// Helper function to generate a unique ID
const generateId = () => Math.random().toString(36).substring(2, 9);

const KindnessChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: generateId(),
      text: "Hello! I'm Lumina's assistant. I can suggest kindness activities or provide some motivation. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send a random suggestion every 15-18 minutes (only if window is open)
  useEffect(() => {
    if (!isOpen) return;
    
    const suggestionInterval = setInterval(() => {
      if (Math.random() > 0.5) { // 50% chance to send a suggestion
        sendBotMessage(
          kindnessSuggestions[Math.floor(Math.random() * kindnessSuggestions.length)]
        );
      } else {
        sendBotMessage(
          motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]
        );
      }
    }, 15 * 60 * 1000 + Math.random() * 3 * 60 * 1000); // 15-18 minutes
    
    return () => clearInterval(suggestionInterval);
  }, [isOpen]);

  const sendBotMessage = (text: string) => {
    const newMessage: Message = {
      id: generateId(),
      text: text,
      sender: "bot",
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const processUserMessage = (userText: string) => {
    // Check for keywords to determine response type
    const lowerText = userText.toLowerCase();
    
    if (lowerText.includes("suggest") || lowerText.includes("idea") || lowerText.includes("help")) {
      // Send a random suggestion
      setTimeout(() => {
        sendBotMessage(
          kindnessSuggestions[Math.floor(Math.random() * kindnessSuggestions.length)]
        );
      }, 500);
    } else if (
      lowerText.includes("motivate") || 
      lowerText.includes("inspire") || 
      lowerText.includes("encourage")
    ) {
      // Send a random motivational message
      setTimeout(() => {
        sendBotMessage(
          motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]
        );
      }, 500);
    } else {
      // Generic response
      setTimeout(() => {
        sendBotMessage(
          "I'm here to help with kindness suggestions and motivation. Ask me for ideas or inspiration anytime!"
        );
      }, 500);
    }
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const newMessage: Message = {
      id: generateId(),
      text: input.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");
    
    // Process the user message after a short delay
    processUserMessage(input);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Format time as HH:MM
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) {
    return (
      <Button
        onClick={toggleOpen}
        className="fixed bottom-6 right-6 rounded-full bg-kindness-teal hover:bg-kindness-teal/90 shadow-lg z-50 h-14 w-14 p-0"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-80 md:w-96 shadow-xl border-2 border-kindness-light/80 overflow-hidden animate-scale-in z-50">
      <CardHeader className="bg-gradient-to-r from-kindness-teal to-kindness-teal/70 text-white py-3 flex flex-row items-center justify-between space-y-0 gap-2">
        <CardTitle className="flex items-center text-lg font-medium">
          <Bot className="h-5 w-5 mr-2" />
          Lumina Assistant
        </CardTitle>
        <div className="flex items-center space-x-1">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMinimize}
            className="h-8 w-8 bg-white/10 hover:bg-white/20 text-white"
          >
            {isMinimized ? <ChevronDown className="h-4 w-4" /> : <MinusCircle className="h-4 w-4" />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleOpen}
            className="h-8 w-8 bg-white/10 hover:bg-white/20 text-white"
          >
            <XCircle className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CardContent className="p-3 h-72 overflow-y-auto bg-white/50">
              <div className="space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`rounded-2xl px-4 py-2 max-w-[85%] ${
                        msg.sender === "user"
                          ? "bg-kindness-teal text-white rounded-tr-none"
                          : "bg-white border border-kindness-light/50 shadow-sm rounded-tl-none"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className="text-xs opacity-70 mt-1 text-right">
                        {formatTime(msg.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>
            <CardFooter className="p-3 border-t bg-white">
              <div className="flex w-full gap-2">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  className="flex-grow"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-kindness-teal hover:bg-kindness-teal/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default KindnessChatbot;
