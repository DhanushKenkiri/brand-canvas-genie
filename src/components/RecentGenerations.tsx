
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { GeneratedTemplateCard } from "./GeneratedTemplateCard";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { PreviewPanel } from "./PreviewPanel";

export function RecentGenerations() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Sample data for recent generations
  const recentGenerations = [
    {
      id: "1",
      title: "Product Showcase",
      type: "Hero Section",
      image: "/placeholder.svg"
    },
    {
      id: "2",
      title: "Feature Comparison",
      type: "Product Section",
      image: "/placeholder.svg"
    },
    {
      id: "3",
      title: "Testimonial Grid",
      type: "Social Proof",
      image: "/placeholder.svg"
    }
  ];
  
  const handleViewTemplate = (id: string) => {
    setSelectedTemplate(id);
    setIsDialogOpen(true);
  };
  
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Recent Generations</CardTitle>
          <CardDescription>
            Your previously generated UI components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {recentGenerations.map((template) => (
              <GeneratedTemplateCard 
                key={template.id}
                title={template.title}
                type={template.type}
                image={template.image}
                onView={() => handleViewTemplate(template.id)}
              />
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-5xl">
          <PreviewPanel generatedUI={selectedTemplate} />
        </DialogContent>
      </Dialog>
    </>
  );
}
