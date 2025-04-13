
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Code, Copy } from "lucide-react";

interface GeneratedTemplateCardProps {
  title: string;
  type: string;
  image: string;
  onView: () => void;
}

export function GeneratedTemplateCard({ 
  title, 
  type, 
  image, 
  onView 
}: GeneratedTemplateCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={image || "/placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
          <div className="p-4 text-white">
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-200">{type}</p>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{type}</p>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <Button variant="outline" size="sm" className="w-full" onClick={onView}>
          <Eye className="mr-2 h-4 w-4" />
          Preview
        </Button>
      </CardFooter>
    </Card>
  );
}
