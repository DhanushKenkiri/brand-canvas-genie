
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Sparkles, 
  ShoppingBag, 
  Layout, 
  CreditCard, 
  ShoppingCart, 
  ArrowRight, 
  Brush, 
  Palette, 
  PanelLeft, 
  Cpu,
  CheckCircle,
  Monitor
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingHeader } from "@/components/LandingHeader";
import { LandingFooter } from "@/components/LandingFooter";
import { Card, CardContent } from "@/components/ui/card";

const LandingPage = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 flex flex-col">
      <LandingHeader />
      
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-small-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Sparkles className="h-16 w-16 text-brand-purple animate-pulse-slow" />
                <div className="absolute inset-0 rounded-full animate-glow"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Create <span className="text-gradient font-extrabold">Brand-Perfect</span><br /> 
              eCommerce Components
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl">
              Transform your brand assets into stunning, conversion-optimized UI components 
              with our AI-powered design platform. No coding required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {user ? (
                <Button size="lg" asChild className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 text-white">
                  <Link to="/app">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              ) : (
                <>
                  <Button size="lg" asChild className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 text-white">
                    <Link to="/auth/signup">
                      Start Creating Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-brand-purple hover:bg-brand-purple/10">
                    <Link to="/auth/login">
                      Sign In
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-secondary/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Craft the Perfect eCommerce Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Generate beautiful, on-brand UI components with just a few clicks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <ShoppingBag className="h-12 w-12 text-brand-purple" />, 
                title: "Product Cards",
                description: "Create eye-catching product cards that showcase your items in style."
              },
              { 
                icon: <Layout className="h-12 w-12 text-brand-blue" />, 
                title: "Hero Sections",
                description: "Design captivating hero sections that convert visitors into customers."
              },
              { 
                icon: <CreditCard className="h-12 w-12 text-brand-purple-light" />, 
                title: "Checkout Flows",
                description: "Optimize the checkout experience to reduce cart abandonment."
              },
              { 
                icon: <ShoppingCart className="h-12 w-12 text-brand-blue-light" />, 
                title: "Category Pages",
                description: "Build intuitive category pages that help customers find what they need."
              }
            ].map((feature, index) => (
              <Card key={index} className="glass-card hover-glow group transition-all duration-300 transform hover:-translate-y-1 border-white/5">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-secondary/50 border border-white/5">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to create stunning eCommerce components
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Palette className="h-10 w-10 text-brand-purple" />, 
                title: "Upload Brand Assets",
                description: "Import your logo, colors, and style guide to ensure perfect brand alignment."
              },
              { 
                icon: <Brush className="h-10 w-10 text-brand-blue" />, 
                title: "Describe Your Needs",
                description: "Tell our AI what you're looking for using simple natural language."
              },
              { 
                icon: <Monitor className="h-10 w-10 text-brand-purple-light" />, 
                title: "Generate & Export",
                description: "Get production-ready UI components you can use immediately."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center space-y-4 glass-card p-8 rounded-xl hover-glow transition-all duration-300">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="p-4 rounded-full bg-secondary/50 border border-white/5">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-brand-purple/10 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 glass-card p-12 rounded-2xl border border-brand-purple/20">
            <div className="md:w-2/3">
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your eCommerce Experience?</h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of businesses creating beautiful, on-brand UI components with Brand Canvas Genie.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  "Brand-perfect components in minutes",
                  "No design or coding skills required",
                  "Export-ready for your website or store"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-purple mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Button size="lg" asChild className="w-full md:w-auto bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 text-white">
                <Link to={user ? "/app" : "/auth/signup"}>
                  {user ? "Go to Dashboard" : "Get Started Free"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
