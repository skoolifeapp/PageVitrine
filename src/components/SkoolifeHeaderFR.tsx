import { Button } from "@/components/ui/button";

export const SkoolifeHeaderFR = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-header">
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