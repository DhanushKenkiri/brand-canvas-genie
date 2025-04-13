
import { useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { BrandAssetsUploader } from "@/components/BrandAssetsUploader";
import { PromptInput } from "@/components/PromptInput";
import { PreviewPanel } from "@/components/PreviewPanel";
import { RecentGenerations } from "@/components/RecentGenerations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppSidebar } from "@/components/AppSidebar";
import { Sparkles, History } from "lucide-react";
import { 
  SidebarProvider, 
  SidebarInset 
} from "@/components/ui/sidebar";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("generate");
  const [generatedUI, setGeneratedUI] = useState<string | null>(null);
  
  const handleGenerate = (prompt: string) => {
    console.log("Generating UI with prompt:", prompt);
    setGeneratedUI(prompt); // In a real app, this would be the result from an API
  };
  
  return (
    <div className="min-h-screen bg-background">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <SidebarInset className="bg-gradient-to-b from-background to-background/80">
            <AppHeader />
            
            <div className="container py-8 px-4">
              <div className="flex flex-col gap-10 animate-fade-in">
                <Tabs defaultValue="generate" className="w-full" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 neon-border">
                    <TabsTrigger 
                      value="generate" 
                      className="flex items-center gap-2 data-[state=active]:bg-brand-purple data-[state=active]:text-white"
                    >
                      <Sparkles className="h-4 w-4" />
                      <span>Generate</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="history" 
                      className="flex items-center gap-2 data-[state=active]:bg-brand-purple data-[state=active]:text-white"
                    >
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
                      <div className="glass-card rounded-xl overflow-hidden border border-white/5">
                        <PreviewPanel generatedUI={generatedUI} />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="history" className="mt-8 animate-fade-in">
                    <div className="glass-card rounded-xl p-6 border border-white/5">
                      <RecentGenerations />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
