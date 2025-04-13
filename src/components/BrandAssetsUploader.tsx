
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon, PaintBucket, Font } from "lucide-react";

export function BrandAssetsUploader() {
  const [activeTab, setActiveTab] = useState("images");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Brand Assets</CardTitle>
        <CardDescription>
          Upload your brand assets to generate consistent UI components
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="images" className="w-full" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="images" className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4" />
              <span>Images</span>
            </TabsTrigger>
            <TabsTrigger value="colors" className="flex items-center gap-2">
              <PaintBucket className="h-4 w-4" />
              <span>Colors</span>
            </TabsTrigger>
            <TabsTrigger value="typography" className="flex items-center gap-2">
              <Font className="h-4 w-4" />
              <span>Typography</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="images" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <UploadCard title="Product Image" description="Upload your main product image" />
              <UploadCard title="Logo" description="Upload your brand logo" />
              <UploadCard title="Banner" description="Upload a banner or hero image" />
            </div>
          </TabsContent>
          
          <TabsContent value="colors" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ColorSelector title="Primary Color" defaultColor="#6366F1" />
              <ColorSelector title="Secondary Color" defaultColor="#0EA5E9" />
              <ColorSelector title="Accent Color" defaultColor="#8B5CF6" />
              <ColorSelector title="Background Color" defaultColor="#FFFFFF" />
            </div>
          </TabsContent>
          
          <TabsContent value="typography" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FontSelector title="Heading Font" defaultFont="Inter" />
              <FontSelector title="Body Font" defaultFont="Inter" />
              <SizeSelector title="Base Font Size" defaultSize="16px" />
              <SizeSelector title="Line Height" defaultSize="1.5" />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Reset</Button>
        <Button className="bg-gradient-to-r from-brand-purple to-brand-blue-light text-white hover:opacity-90">
          Save Assets
        </Button>
      </CardFooter>
    </Card>
  );
}

function UploadCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-2 p-4 border rounded-md border-dashed hover:border-brand-purple/50 hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="flex items-center justify-center h-32 w-full bg-gray-100 rounded-md mb-2">
        <Upload className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="font-medium text-sm">{title}</h3>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  );
}

function ColorSelector({ title, defaultColor }: { title: string; defaultColor: string }) {
  const [color, setColor] = useState(defaultColor);
  
  return (
    <div className="flex items-center justify-between p-4 border rounded-md">
      <div>
        <h3 className="font-medium text-sm">{title}</h3>
        <p className="text-xs text-gray-500">{color}</p>
      </div>
      <div className="flex items-center gap-2">
        <div 
          className="h-8 w-8 rounded-full border" 
          style={{ backgroundColor: color }}
        />
        <input 
          type="color" 
          value={color} 
          onChange={(e) => setColor(e.target.value)} 
          className="h-8 w-8 cursor-pointer"
        />
      </div>
    </div>
  );
}

function FontSelector({ title, defaultFont }: { title: string; defaultFont: string }) {
  const [font, setFont] = useState(defaultFont);
  const fontOptions = ["Inter", "Roboto", "Montserrat", "Playfair Display", "Oswald"];
  
  return (
    <div className="flex flex-col gap-2 p-4 border rounded-md">
      <h3 className="font-medium text-sm">{title}</h3>
      <select 
        value={font} 
        onChange={(e) => setFont(e.target.value)}
        className="w-full p-2 border rounded-md"
      >
        {fontOptions.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <p className="text-sm mt-2" style={{ fontFamily: font }}>
        Sample text with this font
      </p>
    </div>
  );
}

function SizeSelector({ title, defaultSize }: { title: string; defaultSize: string }) {
  const [size, setSize] = useState(defaultSize);
  
  return (
    <div className="flex flex-col gap-2 p-4 border rounded-md">
      <h3 className="font-medium text-sm">{title}</h3>
      <input 
        type="text" 
        value={size} 
        onChange={(e) => setSize(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
    </div>
  );
}
