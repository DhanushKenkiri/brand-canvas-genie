
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Star, 
  ShoppingBag, 
  CreditCard, 
  Box, 
  Github, 
  Twitter, 
  Instagram, 
  Linkedin 
} from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="border-t border-white/10 py-12 bg-secondary/70 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-brand-purple" />
              <span className="font-bold text-gradient">Brand Canvas Genie</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered UI generator for eCommerce businesses. Create brand-aligned components in minutes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-purple transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="hover:text-brand-purple transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-brand-purple transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-brand-purple transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            &copy; 2025 Brand Canvas Genie. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link to="#" className="text-xs text-muted-foreground hover:text-brand-purple transition-colors">
              Privacy
            </Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-brand-purple transition-colors">
              Terms
            </Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-brand-purple transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
