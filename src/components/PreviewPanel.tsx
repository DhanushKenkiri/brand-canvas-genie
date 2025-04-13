
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
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  MonitorSmartphone, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Code, 
  Download, 
  Copy,
  Check
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function PreviewPanel({ generatedUI }: { generatedUI: string | null }) {
  const [viewMode, setViewMode] = useState("desktop");
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const handleExportCode = () => {
    toast({
      title: "Code Exported!",
      description: "React component code has been downloaded.",
    });
  };
  
  const handleCopyCode = () => {
    if (generatedUI) {
      navigator.clipboard.writeText(sampleCode);
      setCopied(true);
      toast({
        title: "Code Copied!",
        description: "Code has been copied to clipboard",
      });
      
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  const sampleCode = `import React from 'react';

export function ProductShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <div className="mb-8 lg:mb-0">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Premium Eco-Friendly Water Bottle
          </h2>
          <p className="mt-4 text-gray-500 max-w-3xl">
            Our signature water bottle combines elegant design with 
            sustainable materials. Each bottle keeps your drinks cold 
            for 24 hours or hot for 12 hours.
          </p>
          <div className="mt-8">
            <span className="text-2xl font-bold text-gray-900">$35.99</span>
            <span className="ml-2 text-lg text-gray-500 line-through">$45.99</span>
          </div>
          <div className="mt-6">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-md 
              hover:bg-indigo-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="relative">
          <img 
            src="/placeholder.svg" 
            alt="Eco-Friendly Water Bottle" 
            className="rounded-lg shadow-xl" 
          />
          <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-1 
            rounded-full text-sm font-medium">
            Eco-Friendly
          </div>
        </div>
      </div>
    </div>
  );
}`;

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Preview</CardTitle>
            <CardDescription>
              Preview and export your generated UI
            </CardDescription>
          </div>
          <div className="flex items-center gap-2 border rounded-md">
            <Button
              variant={viewMode === "desktop" ? "default" : "ghost"}
              size="sm"
              className="rounded-none rounded-l-md"
              onClick={() => setViewMode("desktop")}
            >
              <Monitor className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "tablet" ? "default" : "ghost"}
              size="sm"
              className="rounded-none"
              onClick={() => setViewMode("tablet")}
            >
              <Tablet className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "mobile" ? "default" : "ghost"}
              size="sm"
              className="rounded-none rounded-r-md"
              onClick={() => setViewMode("mobile")}
            >
              <Smartphone className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="px-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="preview" className="flex items-center gap-2">
                <MonitorSmartphone className="h-4 w-4" />
                <span>Preview</span>
              </TabsTrigger>
              <TabsTrigger value="code" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span>Code</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="preview" className="p-0">
            <div className={`
              border-x border-b rounded-b-md overflow-hidden transition-all duration-300
              ${viewMode === 'mobile' ? 'max-w-[375px]' : 
                viewMode === 'tablet' ? 'max-w-[768px]' : 'w-full'}
              mx-auto
            `}>
              {generatedUI ? (
                <div className="bg-white p-4 min-h-[400px]">
                  {/* This would be replaced with actual generated UI */}
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                      <div className="mb-8 lg:mb-0">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                          Premium Eco-Friendly Water Bottle
                        </h2>
                        <p className="mt-4 text-gray-500 max-w-3xl">
                          Our signature water bottle combines elegant design with 
                          sustainable materials. Each bottle keeps your drinks cold 
                          for 24 hours or hot for 12 hours.
                        </p>
                        <div className="mt-8">
                          <span className="text-2xl font-bold text-gray-900">$35.99</span>
                          <span className="ml-2 text-lg text-gray-500 line-through">$45.99</span>
                        </div>
                        <div className="mt-6">
                          <button className="px-6 py-3 bg-indigo-600 text-white rounded-md 
                            hover:bg-indigo-700 transition-colors">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                      <div className="relative">
                        <img 
                          src="/placeholder.svg" 
                          alt="Eco-Friendly Water Bottle" 
                          className="rounded-lg shadow-xl" 
                        />
                        <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-1 
                          rounded-full text-sm font-medium">
                          Eco-Friendly
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-96 bg-gray-50">
                  <MonitorSmartphone className="h-12 w-12 text-gray-300 mb-4" />
                  <p className="text-gray-500">Generate UI to see preview</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="code" className="p-0">
            {generatedUI ? (
              <div className="border-x border-b rounded-b-md overflow-hidden">
                <div className="bg-gray-900 p-4 overflow-auto max-h-[500px]">
                  <pre className="text-gray-300 text-sm">
                    <code>{sampleCode}</code>
                  </pre>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-96 bg-gray-50 border-x border-b rounded-b-md">
                <Code className="h-12 w-12 text-gray-300 mb-4" />
                <p className="text-gray-500">Generate UI to see code</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      {generatedUI && (
        <CardFooter className="flex justify-between mt-4">
          <Button variant="outline" onClick={handleCopyCode}>
            {copied ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                Copy Code
              </>
            )}
          </Button>
          <Button onClick={handleExportCode} className="bg-brand-purple text-white hover:bg-brand-purple/90">
            <Download className="mr-2 h-4 w-4" />
            Export React Component
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
