
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Sparkles, RotateCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function PromptInput({ onGenerate }: { onGenerate: (prompt: string) => void }) {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();
  
  const promptExamples = [
    "Create a hero section for a premium skincare product with a clean, minimal aesthetic",
    "Design a product showcase for an eco-friendly water bottle with vibrant colors",
    "Generate a testimonial section for a luxury watch brand with elegant typography",
    "Create a feature comparison section for wireless headphones with a tech-focused design"
  ];
  
  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast({
        title: "Empty prompt",
        description: "Please enter a prompt to generate UI components",
        variant: "destructive"
      });
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate generation with a timeout
    setTimeout(() => {
      onGenerate(prompt);
      setIsGenerating(false);
      toast({
        title: "UI Generated!",
        description: "Your UI components have been generated successfully",
      });
    }, 2000);
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Describe Your UI</CardTitle>
        <CardDescription>
          Tell us what type of UI you want to generate
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea 
          placeholder="Enter your description (e.g., 'Create a modern product page for eco-friendly water bottles')"
          className="min-h-40 resize-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        
        <div>
          <h3 className="text-sm font-medium mb-2">Examples</h3>
          <div className="flex flex-wrap gap-2">
            {promptExamples.map((example, index) => (
              <Button 
                key={index} 
                variant="outline" 
                size="sm" 
                className="text-xs"
                onClick={() => setPrompt(example)}
              >
                {example.substring(0, 30)}...
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button 
          onClick={handleGenerate}
          disabled={isGenerating}
          className="bg-gradient-to-r from-brand-purple to-brand-blue-light text-white hover:opacity-90"
        >
          {isGenerating ? (
            <>
              <RotateCw className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate UI
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
