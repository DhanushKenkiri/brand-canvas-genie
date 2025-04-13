
import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import {
  Sparkles,
  LayoutDashboard,
  ShoppingBag,
  Brush,
  Palette,
  Settings,
  HelpCircle,
  FileText,
  CreditCard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export function AppSidebar() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <Sidebar className="border-r border-white/10">
      <SidebarHeader className="border-b border-white/10">
        <div className="flex items-center gap-2 p-2 h-16">
          <Sparkles className="h-6 w-6 text-brand-purple animate-pulse-slow" />
          <span className="font-bold text-xl text-gradient">Brand Canvas</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>MAIN</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={true} tooltip="Dashboard">
                  <LayoutDashboard className="h-5 w-5" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Templates">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Templates</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Brand Assets">
                  <Palette className="h-5 w-5" />
                  <span>Brand Assets</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Design Elements">
                  <Brush className="h-5 w-5" />
                  <span>Design Elements</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>SETTINGS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Account Settings">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Billing">
                  <CreditCard className="h-5 w-5" />
                  <span>Billing</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-white/10">
        <div className="p-4 flex flex-col gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="justify-start w-full border-white/10 hover:bg-brand-purple/10 hover:text-brand-purple"
          >
            <HelpCircle className="h-4 w-4 mr-2" />
            Help & Support
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="justify-start w-full border-white/10 hover:bg-brand-purple/10 hover:text-brand-purple"
          >
            <FileText className="h-4 w-4 mr-2" />
            Documentation
          </Button>
        </div>
        
        <div className="p-4 text-xs text-muted-foreground text-center">
          &copy; 2025 Brand Canvas Genie
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
