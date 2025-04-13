
import { useState } from "react";
import { Header } from "@/components/Header";
import { BrandAssetsUploader } from "@/components/BrandAssetsUploader";
import { PromptInput } from "@/components/PromptInput";
import { PreviewPanel } from "@/components/PreviewPanel";
import { RecentGenerations } from "@/components/RecentGenerations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Sparkles,
  History, 
  Star, 
  ShoppingBag, 
  ShoppingCart, 
  Layout, 
  CreditCard, 
  Box 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [activeTab, setActiveTab] = useState("generate");
  const [generatedUI, setGeneratedUI] = useState<string | null>(null);
  
  const handleGenerate = (prompt: string) => {
    console.log("Generating UI with prompt:", prompt);
    setGeneratedUI(prompt); // In a real app, this would be the result from an API
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container py-12 px-4">
        <div className="flex flex-col gap-10 animate-fade-in">
          <div className="space-y-4 text-center">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Sparkles className="h-12 w-12 text-brand-purple animate-pulse-slow" />
                <div className="absolute inset-0 rounded-full animate-glow"></div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Generate <span className="text-gradient">Brand-Aligned</span> UI Components
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Upload your brand assets, enter a description, and let AI create stunning e-commerce components 
              that reflect your unique brand identity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {['Product Cards', 'Hero Sections', 'Checkout Flows', 'Category Pages'].map((item, index) => (
              <Card key={index} className="glass-card hover-glow group transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  {index === 0 && <ShoppingBag className="h-10 w-10 text-brand-purple" />}
                  {index === 1 && <Layout className="h-10 w-10 text-brand-blue" />}
                  {index === 2 && <CreditCard className="h-10 w-10 text-brand-purple-light" />}
                  {index === 3 && <ShoppingCart className="h-10 w-10 text-brand-blue-light" />}
                  <h3 className="font-semibold text-lg">{item}</h3>
                  <p className="text-muted-foreground text-sm">Create stunning {item.toLowerCase()} with your brand colors and style.</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Tabs defaultValue="generate" className="w-full mt-8" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 neon-border">
              <TabsTrigger value="generate" className="flex items-center gap-2 data-[state=active]:bg-brand-purple data-[state=active]:text-white">
                <Sparkles className="h-4 w-4" />
                <span>Generate</span>
              </TabsTrigger>
              <TabsTrigger value="history" className="flex items-center gap-2 data-[state=active]:bg-brand-purple data-[state=active]:text-white">
                <History className="h-4 w-4" />
                <span>History</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="generate" className="space-y-8 mt-8 animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <BrandAssetsUploader />
                  <PromptInput onGenerate={handleGenerate} />
                </div>
                <div className="glass-card rounded-xl overflow-hidden">
                  <PreviewPanel generatedUI={generatedUI} />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="history" className="mt-8 animate-fade-in">
              <div className="glass-card rounded-xl p-6">
                <RecentGenerations />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <footer className="border-t border-white/10 py-10 bg-secondary/70 backdrop-blur-md">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-brand-purple" />
              <span className="font-bold text-gradient">Brand Canvas Genie</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="#" className="text-sm hover:text-brand-purple transition-colors flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>Features</span>
              </a>
              <a href="#" className="text-sm hover:text-brand-purple transition-colors flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                <span>Templates</span>
              </a>
              <a href="#" className="text-sm hover:text-brand-purple transition-colors flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span>Pricing</span>
              </a>
              <a href="#" className="text-sm hover:text-brand-purple transition-colors flex items-center gap-2">
                <Box className="h-4 w-4" />
                <span>Resources</span>
              </a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2025 Brand Canvas Genie. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
