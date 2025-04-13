
import { useNavigate, useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Sparkles } from "lucide-react";

export default function Auth() {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // If user is logged in and not on the logout page, redirect to home
  if (!isLoading && user && !location.pathname.includes("logout")) {
    return <Navigate to="/" replace />;
  }
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-white/10 backdrop-blur-md py-4">
        <div className="container flex justify-center items-center px-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <Sparkles className="h-6 w-6 text-brand-purple animate-pulse-slow" />
            <span className="font-bold text-xl text-gradient">Brand Canvas Genie</span>
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center p-4 bg-grid-small-white/5">
        <div className="w-full max-w-md animate-fade-in">
          <Outlet />
        </div>
      </main>
      
      <footer className="border-t border-white/10 py-6 backdrop-blur-md">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; 2025 Brand Canvas Genie. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
