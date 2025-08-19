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
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border shadow-header">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b8c3645b-f96c-42ec-8bd6-f3bd829eba8e.png" 
              alt="Skoolife" 
              className="h-16 sm:h-20 lg:h-24 w-auto"
            />
          </div>

          {/* Navigation de bureau */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('modules')}
              className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors duration-200 font-body"
            >
              Modules
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors duration-200 font-body"
            >
              FAQ
            </button>
          </nav>

          {/* CTA de bureau */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('inscription')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring font-body text-sm lg:text-base px-4 lg:px-6 py-2"
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
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('modules')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200 font-body py-2 text-sm"
              >
                Modules
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200 font-body py-2 text-sm"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('inscription')}
                className="mt-3 bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring font-body w-full text-sm"
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