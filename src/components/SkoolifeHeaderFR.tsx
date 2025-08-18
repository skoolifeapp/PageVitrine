import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const SkoolifeHeaderFR = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b8c3645b-f96c-42ec-8bd6-f3bd829eba8e.png" 
              alt="Skoolife" 
              className="h-24 w-auto"
            />
          </div>

          {/* Navigation de bureau */}
          <nav className="hidden md:flex items-center space-x-8">
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

          {/* CTA de bureau */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('inscription')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring font-body"
            >
              Rejoindre la liste d'attente
            </Button>
          </div>

          {/* Bouton menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Basculer le menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
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
                onClick={() => scrollToSection('inscription')}
                className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring font-body w-full"
              >
                Rejoindre la liste d'attente
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};