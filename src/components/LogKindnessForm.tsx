
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Heart, Camera, Send } from "lucide-react";
import { toast } from "sonner";

const LogKindnessForm = ({ onClose }: { onClose: () => void }) => {
  const [description, setDescription] = useState("");
  const [recipient, setRecipient] = useState("");
  const [kindnessType, setKindnessType] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically send the data to an API
    console.log({ description, recipient, kindnessType, isAnonymous, image });
    toast.success("Your kindness has been logged!", {
      description: "Thank you for making the world a better place!",
    });
    onClose();
  };

  return (
    <Card className="border-2 max-w-md w-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-kindness-teal" />
          Log Your Kindness
        </CardTitle>
        <CardDescription>Share your act of kindness with the world</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="description">What did you do?</Label>
            <Textarea
              id="description"
              placeholder="Describe your act of kindness..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="resize-none"
              rows={3}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="recipient">Who did you help?</Label>
            <Input
              id="recipient"
              placeholder="Name or 'a stranger'"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="kindnessType">Type of kindness</Label>
            <Select value={kindnessType} onValueChange={setKindnessType} required>
              <SelectTrigger id="kindnessType">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="help">Helping Hand</SelectItem>
                <SelectItem value="gift">Gift or Donation</SelectItem>
                <SelectItem value="time">Time & Attention</SelectItem>
                <SelectItem value="compliment">Compliment or Encouragement</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2">
            <Switch
              id="anonymous"
              checked={isAnonymous}
              onCheckedChange={setIsAnonymous}
            />
            <Label htmlFor="anonymous">Keep it anonymous</Label>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="image">Add a photo (optional)</Label>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => document.getElementById("image")?.click()}
              >
                <Camera className="h-4 w-4 mr-2" />
                {image ? "Change Photo" : "Add Photo"}
              </Button>
              <Input
                id="image"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
            {imagePreview && (
              <div className="mt-2 relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-32 object-cover rounded-md"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => {
                    setImage(null);
                    setImagePreview(null);
                  }}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" className="bg-kindness-teal hover:bg-kindness-teal/90">
            <Send className="h-4 w-4 mr-2" />
            Share Kindness
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LogKindnessForm;
