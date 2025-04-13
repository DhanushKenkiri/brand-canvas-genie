
import { useState } from "react";
import { Header } from "@/components/Header";
import { BrandAssetsUploader } from "@/components/BrandAssetsUploader";
import { PromptInput } from "@/components/PromptInput";
import { PreviewPanel } from "@/components/PreviewPanel";
import { RecentGenerations } from "@/components/RecentGenerations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, History } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("generate");
  const [generatedUI, setGeneratedUI] = useState<string | null>(null);
  
  const handleGenerate = (prompt: string) => {
    console.log("Generating UI with prompt:", prompt);
    setGeneratedUI(prompt); // In a real app, this would be the result from an API
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8 px-4">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold text-center">
            Generate Brand-Aligned UI Components <span className="text-brand-purple">in Seconds</span>
          </h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Upload your brand assets, enter a description, and let AI create beautiful UI components 
            that match your brand's style. Perfect for eCommerce landing pages and product showcases.
          </p>
          
          <Tabs defaultValue="generate" className="w-full" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="generate" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>Generate</span>
              </TabsTrigger>
              <TabsTrigger value="history" className="flex items-center gap-2">
                <History className="h-4 w-4" />
                <span>History</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="generate" className="space-y-8 mt-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <BrandAssetsUploader />
                  <PromptInput onGenerate={handleGenerate} />
                </div>
                <PreviewPanel generatedUI={generatedUI} />
              </div>
            </TabsContent>
            
            <TabsContent value="history" className="mt-6">
              <RecentGenerations />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <footer className="bg-white border-t py-8">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-brand-purple" />
              <span className="font-bold">Brand Canvas Genie</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm hover:text-brand-purple transition-colors">About</a>
              <a href="#" className="text-sm hover:text-brand-purple transition-colors">Features</a>
              <a href="#" className="text-sm hover:text-brand-purple transition-colors">Pricing</a>
              <a href="#" className="text-sm hover:text-brand-purple transition-colors">Contact</a>
            </div>
            
            <div className="text-sm text-gray-500">
              © 2025 Brand Canvas Genie. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
