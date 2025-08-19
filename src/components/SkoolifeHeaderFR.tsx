import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const SkoolifeHeaderFR = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          
          {/* Navigation pour desktop et tablette */}
          <nav className="hidden sm:flex items-center space-x-6 md:space-x-8 lg:space-x-12">
            <button 
              onClick={() => scrollToSection('modules')}
              className="relative text-foreground/80 hover:text-foreground transition-all duration-300 font-medium text-sm md:text-base lg:text-lg group"
            >
              Modules
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="relative text-foreground/80 hover:text-foreground transition-all duration-300 font-medium text-sm md:text-base lg:text-lg group"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Logo/Titre centré pour mobile uniquement */}
          <div className="sm:hidden flex-1 text-center">
            <h1 className="text-lg font-bold text-foreground">Skoolife</h1>
          </div>

          {/* CTA pour desktop et tablette */}
          <div className="hidden sm:block">
            <Button 
              onClick={() => scrollToSection('inscription')}
              className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 shadow-lg hover:shadow-xl transition-all duration-300 font-medium rounded-full border-0 text-sm md:text-base px-4 md:px-6 lg:px-8 py-2 md:py-2.5"
              size="sm"
            >
              <span className="hidden md:inline">Rejoindre la liste d'attente</span>
              <span className="md:hidden">S'inscrire</span>
            </Button>
          </div>

          {/* Bouton menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden relative p-2.5 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 min-w-[44px] min-h-[44px]"
            aria-label="Basculer le menu"
          >
            <div className="relative w-5 h-5">
              <span className={`absolute top-0 left-0 w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`absolute top-2 left-0 w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute top-4 left-0 w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Navigation mobile fullscreen */}
        {isMenuOpen && (
          <>
            <div 
              className="sm:hidden fixed inset-0 bg-background/95 backdrop-blur-md z-40 animate-fade-in"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="sm:hidden fixed inset-0 bg-background z-50 animate-scale-in">
              <div className="flex flex-col h-full">
                {/* Header du menu mobile */}
                <div className="flex items-center justify-between p-4 border-b border-border/30">
                  <h2 className="text-xl font-bold text-foreground">Menu</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-accent transition-colors min-w-[44px] min-h-[44px]"
                    aria-label="Fermer le menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                {/* Navigation mobile */}
                <div className="flex-1 flex flex-col justify-center p-8">
                  <nav className="flex flex-col space-y-8 text-center">
                    <button 
                      onClick={() => scrollToSection('modules')}
                      className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-semibold text-2xl py-4 border-b border-border/20 min-h-[64px] flex items-center justify-center"
                    >
                      Modules
                    </button>
                    <button 
                      onClick={() => scrollToSection('faq')}
                      className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-semibold text-2xl py-4 border-b border-border/20 min-h-[64px] flex items-center justify-center"
                    >
                      FAQ
                    </button>
                    <div className="pt-8">
                      <Button 
                        onClick={() => scrollToSection('inscription')}
                        className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold w-full py-4 rounded-full text-lg min-h-[56px]"
                      >
                        Rejoindre la liste d'attente
                      </Button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};