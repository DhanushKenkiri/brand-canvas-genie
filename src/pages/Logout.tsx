
import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Sparkles } from "lucide-react";

export default function Logout() {
  const { signOut } = useAuth();
  
  useEffect(() => {
    const performLogout = async () => {
      await signOut();
    };
    
    performLogout();
  }, [signOut]);
  
  return (
    <div className="space-y-6 glass-card p-8 rounded-xl neon-border animate-fade-in text-center">
      <div className="flex justify-center">
        <div className="relative">
          <Sparkles className="h-10 w-10 text-brand-purple animate-pulse-slow" />
          <div className="absolute inset-0 rounded-full animate-glow"></div>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-gradient">Signing out...</h1>
      <p className="text-muted-foreground">Please wait while we sign you out.</p>
      <div className="flex justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-secondary border-t-brand-purple" />
      </div>
    </div>
  );
}
