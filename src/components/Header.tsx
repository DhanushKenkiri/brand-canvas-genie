
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container flex justify-between items-center h-16 px-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-brand-purple" />
          <span className="font-bold text-xl">Brand Canvas Genie</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-brand-purple transition-colors">Dashboard</a>
          <a href="#" className="text-sm font-medium hover:text-brand-purple transition-colors">Templates</a>
          <a href="#" className="text-sm font-medium hover:text-brand-purple transition-colors">Assets</a>
          <a href="#" className="text-sm font-medium hover:text-brand-purple transition-colors">Export</a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm" className="bg-gradient-to-r from-brand-purple to-brand-blue-light text-white hover:opacity-90">
            Get Started
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute w-full bg-white border-b transition-all duration-300 ease-in-out",
        isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="container py-4 px-4 flex flex-col gap-4">
          <a href="#" className="text-sm font-medium p-2 hover:bg-gray-50 rounded-md">Dashboard</a>
          <a href="#" className="text-sm font-medium p-2 hover:bg-gray-50 rounded-md">Templates</a>
          <a href="#" className="text-sm font-medium p-2 hover:bg-gray-50 rounded-md">Assets</a>
          <a href="#" className="text-sm font-medium p-2 hover:bg-gray-50 rounded-md">Export</a>
          
          <div className="flex flex-col gap-2 pt-2 border-t">
            <Button variant="ghost" size="sm" className="justify-start">Sign In</Button>
            <Button size="sm" className="bg-gradient-to-r from-brand-purple to-brand-blue-light text-white hover:opacity-90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
