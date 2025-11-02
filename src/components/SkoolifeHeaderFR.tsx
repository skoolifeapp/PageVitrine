import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import skoolifeLogo from "@/assets/skoolife-logo.png";

export const SkoolifeHeaderFR = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Hauteur approximative du header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-header">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src={skoolifeLogo} 
              alt="Skoolife" 
              className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14"
            />
            <span className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">Skoolife</span>
          </div>

          {/* CTA de bureau */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('inscription')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring font-body text-sm lg:text-base px-4 lg:px-6 py-2"
            >
              Rejoindre la liste d'attente
            </Button>
          </div>

          {/* Bouton Rejoindre mobile */}
          <div className="md:hidden">
            <Button 
              onClick={() => scrollToSection('inscription')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring font-body text-sm px-4 py-2"
            >
              Rejoindre
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};