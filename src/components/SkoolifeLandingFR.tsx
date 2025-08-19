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
                Pré-lancement • Janvier 2026
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-heading text-foreground mb-4 sm:mb-6 leading-tight">
                Skoolife vous aide à simplifier votre{" "}
                <span className="bg-primary text-primary-foreground px-1 rounded">vie étudiante</span>.
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-3 sm:mb-4 font-body leading-relaxed">
                Finances, tâches, planning et documents. Tout au même endroit.
              </p>
              
              {/* Badge prix - Masqué sur très petit mobile */}
              <div className="hidden xs:block text-sm sm:text-base lg:text-lg text-muted-foreground font-body mb-3 sm:mb-4">
                À partir de <strong className="text-foreground">3,99 €/mois</strong> ou <strong className="text-foreground">39,99 €/an</strong>
              </div>
              
              {/* Intégrations - Masqué sur mobile */}
              <div className="hidden sm:block text-xs sm:text-sm text-muted-foreground font-body mb-6 sm:mb-8">
                <strong>Intégrations :</strong> Google Calendar • Comptes bancaires
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center">
                <Button 
                  onClick={() => scrollToSection('inscription')}
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring font-body px-6 sm:px-8 py-3 text-base sm:text-lg shadow-skoolife hover:shadow-skoolife-lg transition-all duration-200"
                >
                  Rejoindre la liste d'attente
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('modules')}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-body px-6 sm:px-8 py-3 text-base sm:text-lg border-border hover:bg-accent shadow-sm hover:shadow-skoolife transition-all duration-200"
                >
                  Voir les modules
                  <ChevronDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>

            {/* Image des mockups */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-2">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl">
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-skoolife-yellow/20 to-primary/30 rounded-3xl blur-2xl scale-110 animate-pulse"></div>
                
                {/* Floating animation container */}
                <div className="relative animate-float">
                  <img 
                    src="/lovable-uploads/025c2b45-0d0e-4553-9ef5-a78112ebad64.png" 
                    alt="Interface Skoolife - Tableau de bord et section finances sur mobile"
                    className="w-full h-auto hover:scale-105 transition-all duration-700 ease-out hover:rotate-1 drop-shadow-2xl hover:drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)]"
                  />
                  
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

      {/* Les 4 modules */}
      <section id="modules" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-foreground mb-3 sm:mb-4">
              Quatre modules <span className="marker-highlight">essentiels</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Tout ce dont un étudiant a besoin pour gérer sa vie quotidienne, intégré de manière transparente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="shadow-sm hover:shadow-skoolife-lg transition-all duration-300 group">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center mb-2">
                  <CreditCard className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-base sm:text-lg">
                  Finances
                </CardTitle>
                <CardDescription className="font-body text-xs sm:text-sm text-primary font-semibold">
                  Sache où part ton argent.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="font-body text-xs sm:text-sm text-muted-foreground">
                  Suivi des dépenses, configuration rapide de budget, aperçu clair de votre santé financière.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-skoolife-lg transition-all duration-300 group">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center mb-2">
                  <CheckSquare className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-base sm:text-lg">
                  Tâches
                </CardTitle>
                <CardDescription className="font-body text-xs sm:text-sm text-primary font-semibold">
                  Priorise sans te noyer.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="font-body text-xs sm:text-sm text-muted-foreground">
                  Priorités simples, mode focus pour le travail en profondeur, saisie de tâches sans friction.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-skoolife-lg transition-all duration-300 group">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center mb-2">
                  <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-base sm:text-lg">
                  Planning
                </CardTitle>
                <CardDescription className="font-body text-xs sm:text-sm text-primary font-semibold">
                  Vois ta semaine en un regard.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="font-body text-xs sm:text-sm text-muted-foreground">
                  Agenda clair, synchronisation avec les calendriers existants, rappels utiles qui ne submergent pas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-skoolife-lg transition-all duration-300 group">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center mb-2">
                  <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-base sm:text-lg">
                  Documents
                </CardTitle>
                <CardDescription className="font-body text-xs sm:text-sm text-primary font-semibold">
                  Retrouve tout en 3 secondes.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="font-body text-xs sm:text-sm text-muted-foreground">
                  Tous les PDF et documents importants au même endroit. Triez, étiquetez et recherchez instantanément.
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
              Problèmes que <span className="marker-highlight">nous résolvons</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-body">
              Cela vous dit quelque chose ? Vous n'êtes pas seul.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1 text-sm sm:text-base">Apps éparpillées</h3>
                <p className="text-muted-foreground font-body text-xs sm:text-sm">
                  Plus besoin de jongler entre calendrier, notes et rappels.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1 text-sm sm:text-base">Échéances manquées</h3>
                <p className="text-muted-foreground font-body text-xs sm:text-sm">
                  Rappels intelligents et priorités claires.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1 text-sm sm:text-base">Finances floues</h3>
                <p className="text-muted-foreground font-body text-xs sm:text-sm">
                  Outils de budget simples pour étudiants.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1 text-sm sm:text-base">Documents perdus</h3>
                <p className="text-muted-foreground font-body text-xs sm:text-sm">
                  Tous vos fichiers organisés et consultables.
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
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
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
              Prêt à vous <span className="marker-highlight">organiser</span> ?
            </h2>
          </div>
          <SkoolifeWaitlistFormFR />
        </div>
      </section>

      {/* Flèche de transition */}
      <div className="flex justify-center py-6 lg:py-8">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-skoolife-yellow" style={{ color: 'hsl(var(--skoolife-yellow))' }} />
        </div>
      </div>

      {/* Section FAQ */}
      <section id="faq" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-muted/30 relative">
        {/* FAQ section decorative elements */}
        <div className="absolute bottom-0 left-0 w-20 h-20 md:w-28 md:h-28 bg-skoolife-yellow/8 rounded-full blur-xl"></div>
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-foreground mb-3 sm:mb-4">
              Questions fréquemment <span className="marker-highlight">posées</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-body">
              Tout ce que vous devez savoir sur Skoolife.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            <AccordionItem value="item-1" className="bg-card rounded-lg px-4 sm:px-6 shadow-sm hover:shadow-skoolife transition-shadow duration-200">
              <AccordionTrigger className="font-heading text-left text-sm sm:text-base">
                Quand Skoolife sera-t-il disponible ?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground text-sm">
                Janvier 2026.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card rounded-lg px-4 sm:px-6 shadow-sm hover:shadow-skoolife transition-shadow duration-200">
              <AccordionTrigger className="font-heading text-left text-sm sm:text-base">
                Quelles plateformes Skoolife supportera-t-il ?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground text-sm">
                Skoolife est conçu mobile-first pour iOS et Android.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card rounded-lg px-4 sm:px-6 shadow-sm hover:shadow-skoolife transition-shadow duration-200">
              <AccordionTrigger className="font-heading text-left text-sm sm:text-base">
                Combien coûtera Skoolife ?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground text-sm">
                3,99 € par mois ou 39,99 € par an.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card rounded-lg px-4 sm:px-6 shadow-sm hover:shadow-skoolife transition-shadow duration-200">
              <AccordionTrigger className="font-heading text-left text-sm sm:text-base">
                Puis-je synchroniser avec mon calendrier et mes outils existants ?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground text-sm">
                Oui — Google Calendar et compte bancaire.
              </AccordionContent>
            </AccordionItem>

            {/* FAQ supplémentaires masquées sur mobile pour alléger */}
            <div className="hidden sm:block space-y-3 sm:space-y-4">
              <AccordionItem value="item-5" className="bg-card rounded-lg px-4 sm:px-6 shadow-sm hover:shadow-skoolife transition-shadow duration-200">
                <AccordionTrigger className="font-heading text-left text-sm sm:text-base">
                  Mes données sont-elles sécurisées et privées ?
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground text-sm">
                  Absolument. Nous utilisons un chiffrement standard de l'industrie et ne vendons jamais vos données personnelles. Vos informations académiques et financières restent privées et sécurisées. Vous pouvez exporter ou supprimer vos données à tout moment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card rounded-lg px-4 sm:px-6 shadow-sm hover:shadow-skoolife transition-shadow duration-200">
                <AccordionTrigger className="font-heading text-left text-sm sm:text-base">
                  Qu'est-ce qui rend Skoolife différent des autres applications étudiantes ?
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground text-sm">
                  Skoolife se concentre sur l'expérience complète de la vie étudiante, pas seulement les aspects académiques. Nous combinons planification, tâches, finances et gestion de documents dans une seule application belle et facile à utiliser, conçue spécifiquement pour les étudiants post-secondaires.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-card rounded-lg px-4 sm:px-6 shadow-sm hover:shadow-skoolife transition-shadow duration-200">
                <AccordionTrigger className="font-heading text-left text-sm sm:text-base">
                  Puis-je être testeur bêta ?
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground text-sm">
                  Oui ! Lorsque vous rejoignez la liste d'attente, vous pouvez choisir d'être testeur bêta. Nous contacterons les testeurs bêta sélectionnés pour un accès anticipé et des sessions de retours avant le lancement public.
                </AccordionContent>
              </AccordionItem>
            </div>
          </Accordion>
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
              © 2024 Skoolife. Tous droits réservés. Pré-lancement — bientôt disponible.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};