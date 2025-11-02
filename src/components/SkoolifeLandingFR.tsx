import { SkoolifeHeaderFR } from "./SkoolifeHeaderFR";
import { SkoolifeWaitlistFormFR } from "./SkoolifeWaitlistFormFR";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, CheckSquare, CreditCard, FileText, CheckCircle, ArrowDown, ArrowRight, ChevronDown } from "lucide-react";

export const SkoolifeLandingFR = () => {
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
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Decorative yellow background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top right blob */}
        <div className="absolute -top-24 -right-24 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-skoolife-yellow/10 rounded-full blur-3xl"></div>
        
        {/* Middle left shape */}
        <div className="absolute top-1/3 -left-16 w-32 h-64 md:w-48 md:h-80 lg:w-56 lg:h-96 bg-skoolife-yellow/8 rounded-full blur-2xl rotate-45"></div>
        
        {/* Bottom center accent */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 bg-skoolife-yellow/6 rounded-full blur-3xl"></div>
        
        {/* Small accent dots */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-skoolife-yellow/20 rounded-full"></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-skoolife-yellow/15 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-skoolife-yellow/25 rounded-full"></div>
      </div>
      
      <SkoolifeHeaderFR />

      {/* Section Héro */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in">
            {/* Contenu texte */}
            <div className="text-center lg:text-left order-1 lg:order-1">
              {/* Kicker */}
              <div className="inline-block bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold font-body mb-3 sm:mb-4">
                En développement
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-heading text-foreground mb-4 sm:mb-6 leading-tight">
                Ton planning de révisions,{" "}
                <span className="bg-skoolife-yellow text-foreground px-2 rounded">optimisé</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-3 sm:mb-4 font-body leading-relaxed">
                Import ton .ics, ajoute tes contraintes, et l'IA crée ton planning. Ajusté chaque semaine à ton rythme.
              </p>
              
              
              {/* Intégrations - Masqué sur mobile */}
              <div className="hidden sm:block text-xs sm:text-sm text-muted-foreground font-body mb-6 sm:mb-8">
                <strong>Compatible avec :</strong> Google Calendar • Apple Calendar • Emplois du temps .ics
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center">
                <Button 
                  onClick={() => scrollToSection('inscription')}
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring font-body px-6 sm:px-8 py-3 text-base sm:text-lg shadow-skoolife hover:shadow-skoolife-lg transition-all duration-200"
                >
                  Rejoindre la liste d'attente
                  <ChevronDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('modules')}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-body px-6 sm:px-8 py-3 text-base sm:text-lg border-border hover:bg-accent shadow-sm hover:shadow-skoolife transition-all duration-200"
                >
                  Découvrez
                  <ChevronDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>

            {/* Illustration visuelle */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-2">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl">
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-skoolife-yellow/20 to-primary/30 rounded-3xl blur-2xl scale-110 animate-pulse"></div>
                
                {/* Floating animation container with calendar/schedule visualization */}
                <div className="relative animate-float bg-card/80 backdrop-blur rounded-2xl p-6 sm:p-8 shadow-2xl">
                  <div className="space-y-4">
                    {/* Week header */}
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-heading text-lg font-bold text-foreground">Planning de révisions</h3>
                      <div className="text-xs text-muted-foreground bg-skoolife-yellow/20 px-3 py-1 rounded-full">IA</div>
                    </div>
                    
                    {/* Schedule blocks */}
                    <div className="space-y-3">
                      <div className="bg-skoolife-yellow/30 p-3 rounded-lg flex items-center gap-3">
                        <div className="w-2 h-12 bg-skoolife-yellow rounded-full"></div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">Mathématiques</p>
                          <p className="text-xs text-muted-foreground">14:00 - 15:30</p>
                        </div>
                      </div>
                      
                      <div className="bg-primary/20 p-3 rounded-lg flex items-center gap-3">
                        <div className="w-2 h-12 bg-primary rounded-full"></div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">Physique</p>
                          <p className="text-xs text-muted-foreground">16:00 - 17:00</p>
                        </div>
                      </div>
                      
                      <div className="bg-skoolife-yellow/20 p-3 rounded-lg flex items-center gap-3">
                        <div className="w-2 h-12 bg-skoolife-yellow/70 rounded-full"></div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">Anglais</p>
                          <p className="text-xs text-muted-foreground">18:00 - 19:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating accent dots */}
                  <div className="absolute -top-4 -right-2 w-3 h-3 bg-skoolife-yellow rounded-full animate-bounce-slow opacity-80"></div>
                  <div className="absolute top-1/3 -left-3 w-2 h-2 bg-skoolife-yellow/60 rounded-full animate-float-delayed opacity-70"></div>
                  <div className="absolute bottom-1/4 -right-4 w-4 h-4 bg-skoolife-yellow/40 rounded-full animate-bounce-slower opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flèche de transition */}
      <div className="flex justify-center py-6 lg:py-8">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-skoolife-yellow" style={{ color: 'hsl(var(--skoolife-yellow))' }} />
        </div>
      </div>

      {/* Comment ça fonctionne */}
      <section id="modules" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-foreground mb-3 sm:mb-4">
              Comment ça <span className="marker-highlight">fonctionne</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Trois étapes simples pour un planning de révisions sur mesure, piloté par l'IA.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <Card className="shadow-sm hover:shadow-skoolife-lg transition-all duration-300 group">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center mb-2">
                  <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-base sm:text-lg">
                  1. Import ton emploi du temps
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="font-body text-xs sm:text-sm text-muted-foreground">
                  Import ton fichier .ics depuis Google Calendar, Apple Calendar ou ton école. Skoolife comprend automatiquement ton emploi du temps.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-skoolife-lg transition-all duration-300 group">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center mb-2">
                  <CheckSquare className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-base sm:text-lg">
                  2. Ajoute tes contraintes
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="font-body text-xs sm:text-sm text-muted-foreground">
                  Indique tes examens, ton rythme préféré, tes disponibilités. L'IA crée un planning adapté à ta vie réelle.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-skoolife-lg transition-all duration-300 group">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center mb-2">
                  <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-base sm:text-lg">
                  3. L'IA s'ajuste à toi
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="font-body text-xs sm:text-sm text-muted-foreground">
                  Chaque semaine, le planning évolue selon ton rythme et tes progrès. Fini la surcharge, place à l'efficacité.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Flèche de transition */}
      <div className="flex justify-center py-6 lg:py-8">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-skoolife-yellow" style={{ color: 'hsl(var(--skoolife-yellow))' }} />
        </div>
      </div>

      {/* Ce que Skoolife résout */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-muted/30 relative">
        {/* Section-specific decorative elements */}
        <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-skoolife-yellow/5 rounded-full blur-2xl"></div>
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-foreground mb-3 sm:mb-4">
              Pourquoi <span className="marker-highlight">Skoolife</span> ?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-body">
              On sait que réviser, c'est stressant. Skoolife réduit la charge mentale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1 text-sm sm:text-base">Fini la procrastination</h3>
                <p className="text-muted-foreground font-body text-xs sm:text-sm">
                  Un planning clair qui te dit quoi réviser et quand. Plus besoin de te poser la question.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1 text-sm sm:text-base">Adapté à ton rythme</h3>
                <p className="text-muted-foreground font-body text-xs sm:text-sm">
                  L'IA ajuste ton planning chaque semaine selon ta progression. Ni trop, ni trop peu.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1 text-sm sm:text-base">Gagne du temps</h3>
                <p className="text-muted-foreground font-body text-xs sm:text-sm">
                  Plus besoin de passer des heures à planifier. Skoolife le fait pour toi.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1 text-sm sm:text-base">Réduis ta charge mentale</h3>
                <p className="text-muted-foreground font-body text-xs sm:text-sm">
                  Laisse l'IA gérer l'organisation. Concentre-toi sur l'essentiel : tes révisions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-base sm:text-lg text-muted-foreground font-body mb-4 sm:mb-6">
              Marre de jongler ? Rejoins l'early access.
            </p>
            <Button 
              onClick={() => scrollToSection('inscription')}
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring font-body px-6 sm:px-8 py-3 text-base sm:text-lg shadow-skoolife hover:shadow-skoolife-lg transition-all duration-200"
            >
              Rejoindre la liste d'attente
              <ChevronDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Flèche de transition */}
      <div className="flex justify-center py-6 lg:py-8">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-skoolife-yellow" style={{ color: 'hsl(var(--skoolife-yellow))' }} />
        </div>
      </div>

      {/* Section Formulaire d'inscription */}
      <section id="inscription" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-foreground mb-3 sm:mb-4">
              Rejoignez l'aventure <span className="marker-highlight">Skoolife</span>
            </h2>
          </div>
          <SkoolifeWaitlistFormFR />
        </div>
      </section>

      {/* Pied de page */}
      <footer className="bg-card border-t border-border px-4 sm:px-6 lg:px-8 py-8 sm:py-12 shadow-skoolife-lg">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Liens légaux masqués sur mobile pour simplifier */}
            <div className="hidden sm:flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
              <button className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-body flex items-center group">
                Politique de confidentialité
                <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-body flex items-center group">
                Conditions d'utilisation
                <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-body flex items-center group">
                Paramètres des cookies
                <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border text-center">
            <p className="text-xs text-muted-foreground font-body">
              © 2025 Skoolife. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};