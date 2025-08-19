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
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-between h-14 sm:h-16">
          
          {/* Navigation centrale pour mobile, à gauche pour desktop */}
          <nav className="flex items-center space-x-8 md:space-x-12">
            <button 
              onClick={() => scrollToSection('modules')}
              className="relative text-foreground/80 hover:text-foreground transition-all duration-300 font-medium text-sm sm:text-base group"
            >
              Modules
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="relative text-foreground/80 hover:text-foreground transition-all duration-300 font-medium text-sm sm:text-base group"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* CTA à droite pour desktop, caché sur mobile */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('inscription')}
              className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 shadow-lg hover:shadow-xl transition-all duration-300 font-medium px-6 py-2.5 rounded-full border-0"
              size="sm"
            >
              Rejoindre la liste d'attente
            </Button>
          </div>

          {/* Bouton menu mobile - coin supérieur droit */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden fixed top-4 right-4 z-60 p-2.5 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Basculer le menu"
          >
            <div className="relative w-5 h-5">
              <span className={`absolute top-0 left-0 w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`absolute top-2 left-0 w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute top-4 left-0 w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Navigation mobile avec overlay */}
        {isMenuOpen && (
          <>
            <div 
              className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40 animate-fade-in"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="md:hidden fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-background border-l border-border shadow-2xl z-50 animate-slide-in-right">
              <div className="p-6 pt-20">
                <nav className="flex flex-col space-y-6">
                  <button 
                    onClick={() => scrollToSection('modules')}
                    className="text-left text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium text-lg py-3 border-b border-border/30"
                  >
                    Modules
                  </button>
                  <button 
                    onClick={() => scrollToSection('faq')}
                    className="text-left text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium text-lg py-3 border-b border-border/30"
                  >
                    FAQ
                  </button>
                  <div className="pt-6">
                    <Button 
                      onClick={() => scrollToSection('inscription')}
                      className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 shadow-lg hover:shadow-xl transition-all duration-300 font-medium w-full py-3 rounded-full"
                    >
                      Rejoindre la liste d'attente
                    </Button>
                  </div>
                </nav>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};