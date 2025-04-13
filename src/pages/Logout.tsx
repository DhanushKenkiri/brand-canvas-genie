
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
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm border text-center">
      <div className="flex justify-center">
        <Sparkles className="h-8 w-8 text-brand-purple animate-pulse" />
      </div>
      <h1 className="text-2xl font-bold">Signing out...</h1>
      <p className="text-gray-500">Please wait while we sign you out.</p>
      <div className="flex justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-brand-purple" />
      </div>
    </div>
  );
}
