
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X, UserPlus, LogIn, LogOut, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container flex justify-between items-center h-16 px-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <Sparkles className="h-6 w-6 text-brand-purple" />
          <span className="font-bold text-xl">Brand Canvas Genie</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-brand-purple transition-colors">Dashboard</Link>
          <Link to="#" className="text-sm font-medium hover:text-brand-purple transition-colors">Templates</Link>
          <Link to="#" className="text-sm font-medium hover:text-brand-purple transition-colors">Assets</Link>
          <Link to="#" className="text-sm font-medium hover:text-brand-purple transition-colors">Export</Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <div className="text-sm font-medium">
                {user.email}
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate("/auth/logout")}
                className="flex items-center gap-2"
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
                className="flex items-center gap-2"
              >
                <LogIn className="h-4 w-4" />
                Sign In
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-brand-purple to-brand-blue-light text-white hover:opacity-90 flex items-center gap-2"
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
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute w-full bg-white border-b transition-all duration-300 ease-in-out",
        isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="container py-4 px-4 flex flex-col gap-4">
          <Link to="/" className="text-sm font-medium p-2 hover:bg-gray-50 rounded-md">Dashboard</Link>
          <Link to="#" className="text-sm font-medium p-2 hover:bg-gray-50 rounded-md">Templates</Link>
          <Link to="#" className="text-sm font-medium p-2 hover:bg-gray-50 rounded-md">Assets</Link>
          <Link to="#" className="text-sm font-medium p-2 hover:bg-gray-50 rounded-md">Export</Link>
          
          <div className="flex flex-col gap-2 pt-2 border-t">
            {user ? (
              <>
                <div className="text-sm font-medium p-2">
                  Signed in as: {user.email}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => {
                    navigate("/auth/logout");
                    setIsMobileMenuOpen(false);
                  }}
                  className="justify-start flex items-center gap-2"
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
                  className="justify-start flex items-center gap-2"
                >
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Button>
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-brand-purple to-brand-blue-light text-white hover:opacity-90 flex items-center gap-2"
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
