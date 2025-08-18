import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const SkoolifeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-bold font-heading text-foreground">
              Skoolife
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('principle')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-body"
            >
              Principle
            </button>
            <button 
              onClick={() => scrollToSection('modules')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-body"
            >
              Modules
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-body"
            >
              FAQ
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('signup')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring font-body"
            >
              Join the waitlist
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('principle')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200 font-body py-2"
              >
                Principle
              </button>
              <button 
                onClick={() => scrollToSection('modules')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200 font-body py-2"
              >
                Modules
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200 font-body py-2"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('signup')}
                className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring font-body w-full"
              >
                Join the waitlist
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};