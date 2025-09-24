import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Users, 
  TrendingUp, 
  Video, 
  Zap, 
  Target,
  Award,
  BarChart3,
  PlayCircle,
  Star
} from "lucide-react";
import Navigation from "@/components/Navigation";
import AuthModal from "@/components/auth/AuthModal";
import Footer from "@/components/Footer";

const Index = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");

  const handleGetStarted = () => {
    setAuthMode("signup");
    setShowAuth(true);
  };

  const handleLogin = () => {
    setAuthMode("login");
    setShowAuth(true);
  };

  const stats = [
    { label: "Athletes Analyzed", value: "50K+", icon: Users },
    { label: "Videos Processed", value: "500K+", icon: Video },
    { label: "Talent Discoveries", value: "2.5K+", icon: Trophy },
    { label: "Performance Boost", value: "35%", icon: TrendingUp },
  ];

  const features = [
    {
      icon: Video,
      title: "AI Video Analysis",
      description: "Advanced computer vision analyzes your technique, speed, and form in real-time."
    },
    {
      icon: BarChart3,
      title: "Performance Metrics",
      description: "Detailed analytics on speed, agility, jump height, and technical skill scores."
    },
    {
      icon: Trophy,
      title: "Global Leaderboards",
      description: "Compete with athletes worldwide and track your regional and global rankings."
    },
    {
      icon: Target,
      title: "Personalized Training",
      description: "AI-powered training recommendations based on your performance analysis."
    },
    {
      icon: Users,
      title: "Scout Network",
      description: "Connect with professional scouts and coaches actively seeking talent."
    },
    {
      icon: Award,
      title: "Skill Certification",
      description: "Earn verified skill badges and certifications recognized by sports institutions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onLogin={handleLogin} />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-performance/20 animate-pulse-slow" />
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Sports Analytics
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-glow">
            SportifyAi
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your athletic potential with AI-powered video analysis, 
            performance tracking, and direct access to scouts and coaches worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={handleGetStarted}
              className="btn-hero text-lg px-8 py-4"
            >
              <PlayCircle className="w-6 h-6 mr-2" />
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              onClick={handleLogin}
              className="text-lg px-8 py-4 border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/10"
            >
              <Users className="w-6 h-6 mr-2" />
              Join as Scout
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="metric-card text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Revolutionize Your Training
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI technology provides insights that help athletes reach their peak performance
              and connect with opportunities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="performance-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl gradient-text">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="performance-card max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Ready to Unlock Your Potential?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of athletes who are already using SportifyAi to enhance their 
              performance and connect with opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleGetStarted}
                className="btn-hero text-lg px-8 py-4"
              >
                <Star className="w-6 h-6 mr-2" />
                Start Free Trial
              </Button>
              <Button 
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-secondary/30 hover:border-secondary/60 hover:bg-secondary/10"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <AuthModal 
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
};

export default Index;