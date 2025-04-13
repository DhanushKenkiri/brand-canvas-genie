
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X, UserPlus, LogIn, LogOut, User, ShoppingBag, LayoutGrid, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
      <div className="container flex justify-between items-center h-16 px-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <Sparkles className="h-6 w-6 text-brand-purple animate-pulse-slow" />
          <span className="font-bold text-xl text-gradient">Brand Canvas Genie</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:text-brand-purple transition-colors flex items-center gap-2">
            <LayoutGrid className="h-4 w-4" />
            <span>Dashboard</span>
          </Link>
          <Link to="#" className="text-sm font-medium hover:text-brand-purple transition-colors flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            <span>Templates</span>
          </Link>
          <Link to="#" className="text-sm font-medium hover:text-brand-purple transition-colors flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span>Assets</span>
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-secondary/80 border border-white/5">
                <User className="h-4 w-4 text-brand-purple" />
                <span className="text-muted-foreground">{user.email}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate("/auth/logout")}
                className="flex items-center gap-2 hover:bg-brand-purple/10 hover:text-brand-purple"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate("/auth/login")}
                className="flex items-center gap-2 hover:bg-brand-purple/10 hover:text-brand-purple"
              >
                <LogIn className="h-4 w-4" />
                Sign In
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 text-white flex items-center gap-2"
                onClick={() => navigate("/auth/signup")}
              >
                <UserPlus className="h-4 w-4" />
                Sign Up
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
          <Link to="/" className="text-sm font-medium p-2 hover:bg-secondary/80 rounded-md flex items-center gap-2">
            <LayoutGrid className="h-4 w-4" />
            <span>Dashboard</span>
          </Link>
          <Link to="#" className="text-sm font-medium p-2 hover:bg-secondary/80 rounded-md flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            <span>Templates</span>
          </Link>
          <Link to="#" className="text-sm font-medium p-2 hover:bg-secondary/80 rounded-md flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span>Assets</span>
          </Link>
          
          <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
            {user ? (
              <>
                <div className="text-sm font-medium p-2 flex items-center gap-2">
                  <User className="h-4 w-4 text-brand-purple" />
                  <span className="text-muted-foreground">{user.email}</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => {
                    navigate("/auth/logout");
                    setIsMobileMenuOpen(false);
                  }}
                  className="justify-start flex items-center gap-2 hover:bg-brand-purple/10 hover:text-brand-purple"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => {
                    navigate("/auth/login");
                    setIsMobileMenuOpen(false);
                  }}
                  className="justify-start flex items-center gap-2 hover:bg-brand-purple/10 hover:text-brand-purple"
                >
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Button>
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 text-white flex items-center gap-2"
                  onClick={() => {
                    navigate("/auth/signup");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <UserPlus className="h-4 w-4" />
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
