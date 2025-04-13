
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Menu, 
  X, 
  UserPlus, 
  LogIn, 
  ArrowRight, 
  ShoppingBag, 
  LayoutGrid, 
  Palette 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

export function LandingHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="border-b border-white/10 backdrop-blur-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-brand-purple animate-pulse-slow" />
          <span className="font-bold text-xl text-gradient">Brand Canvas Genie</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/#features" className="text-sm font-medium hover:text-brand-purple transition-colors">
            Features
          </Link>
          <Link to="/#how-it-works" className="text-sm font-medium hover:text-brand-purple transition-colors">
            How It Works
          </Link>
          <Link to="/#pricing" className="text-sm font-medium hover:text-brand-purple transition-colors">
            Pricing
          </Link>
          <Link to="/#testimonials" className="text-sm font-medium hover:text-brand-purple transition-colors">
            Testimonials
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <Button 
              className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 text-white"
              asChild
            >
              <Link to="/app">
                Go to Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          ) : (
            <>
              <Button 
                variant="ghost" 
                asChild
                className="hover:bg-brand-purple/10 hover:text-brand-purple"
              >
                <Link to="/auth/login">
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </Link>
              </Button>
              <Button 
                className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 text-white"
                asChild
              >
                <Link to="/auth/signup">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden hover:bg-brand-purple/10 hover:text-brand-purple"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute w-full bg-secondary/90 backdrop-blur-lg border-b border-white/5 transition-all duration-300 ease-in-out",
        isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="container py-4 px-4 flex flex-col gap-4">
          <Link to="/#features" className="text-sm font-medium p-2 hover:bg-secondary/80 rounded-md">
            Features
          </Link>
          <Link to="/#how-it-works" className="text-sm font-medium p-2 hover:bg-secondary/80 rounded-md">
            How It Works
          </Link>
          <Link to="/#pricing" className="text-sm font-medium p-2 hover:bg-secondary/80 rounded-md">
            Pricing
          </Link>
          <Link to="/#testimonials" className="text-sm font-medium p-2 hover:bg-secondary/80 rounded-md">
            Testimonials
          </Link>
          
          <div className="flex flex-col gap-2 pt-4 border-t border-white/5 mt-2">
            {user ? (
              <Button 
                className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 text-white"
                asChild
              >
                <Link to="/app">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start hover:bg-brand-purple/10 hover:text-brand-purple"
                  asChild
                >
                  <Link to="/auth/login">
                    <LogIn className="h-4 w-4 mr-2" />
                    Sign In
                  </Link>
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 text-white"
                  asChild
                >
                  <Link to="/auth/signup">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Sign Up
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
