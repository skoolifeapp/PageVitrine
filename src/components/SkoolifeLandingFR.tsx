import { useState } from "react";
import { SkoolifeHeaderFR } from "./SkoolifeHeaderFR";
import { SkoolifeWaitlistFormFR } from "./SkoolifeWaitlistFormFR";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, CheckSquare, CreditCard, FileText, CheckCircle, ArrowDown, ArrowRight, ChevronDown, ChevronLeft, MoreHorizontal } from "lucide-react";

export const SkoolifeLandingFR = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselImages = [
    {
      src: "/lovable-uploads/40a6cc04-71c3-4971-9cc3-c2ee3ebc625c.png",
      alt: "Interface Skoolife - Tableau de bord avec tâches, planning et finances",
      title: "Tableau de bord",
      description: "Vue d'ensemble synchronisée en temps réel"
    },
    {
      src: "/lovable-uploads/0f16d636-9af5-4fa8-aa5a-b3aad758c4fd.png",
      alt: "Interface Skoolife - Ma To-Do List avec gestion des tâches",
      title: "Ma To-Do List",
      description: "Gestion intelligente de vos tâches quotidiennes"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkoolifeHeaderFR />

      {/* Section Héro */}
      <section className="px-3 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            {/* Contenu texte */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-foreground mb-3 sm:mb-4 leading-tight">
                La vie étudiante, <span className="text-primary">simplifiée</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 font-body leading-relaxed max-w-2xl mx-auto">
                Planificateur, tâches, finances et documents. Tout au même endroit.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-8 sm:mb-12 lg:mb-16">
                <Button 
                  onClick={() => scrollToSection('inscription')}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring font-body px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-skoolife hover:shadow-skoolife-lg transition-all duration-200 min-h-[48px] sm:min-h-[52px]"
                >
                  Rejoindre la liste d'attente
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('modules')}
                  variant="outline"
                  size="lg"
                  className="font-body px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-border hover:bg-accent shadow-sm hover:shadow-skoolife transition-all duration-200 min-h-[48px] sm:min-h-[52px]"
                >
                  En savoir plus
                  <ChevronDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>

            {/* Carrousel d'images interactif */}
            <div className="relative max-w-md mx-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-skoolife-xl bg-gradient-to-br from-background to-muted/20 p-6">
                <div className="relative aspect-[9/16] max-w-xs mx-auto">
                  <div className="relative w-full h-full">
                    <img 
                      src={carouselImages[currentSlide].src}
                      alt={carouselImages[currentSlide].alt}
                      className="w-full h-full object-contain rounded-xl hover-scale transition-all duration-500"
                    />
                    
                    {/* Boutons de navigation */}
                    <button
                      onClick={prevSlide}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/90 hover:bg-background border border-border rounded-full flex items-center justify-center shadow-sm transition-all duration-200 hover:shadow-skoolife group"
                      aria-label="Image précédente"
                    >
                      <ChevronLeft className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </button>
                    
                    <button
                      onClick={nextSlide}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/90 hover:bg-background border border-border rounded-full flex items-center justify-center shadow-sm transition-all duration-200 hover:shadow-skoolife group"
                      aria-label="Image suivante"
                    >
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </button>
                  </div>
                </div>
                
                {/* Titre et description de la slide actuelle */}
                <div className="text-center mt-4 mb-4">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    {carouselImages[currentSlide].title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    {carouselImages[currentSlide].description}
                  </p>
                </div>
                
                {/* Indicateurs de navigation */}
                <div className="flex justify-center space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-primary shadow-sm scale-125' 
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                      aria-label={`Aller à l'image ${index + 1}`}
                    />
                  ))}
                  {/* Indicateurs pour les slides futures */}
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/20"></div>
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/20"></div>
                </div>
              </div>
              
              {/* Badge flottant */}
              <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow-skoolife animate-pulse">
                Aperçu exclusif
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-3xl opacity-30 rounded-full scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Flèche de transition */}
      <div className="flex justify-center py-8">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>

      {/* Les 4 modules */}
      <section id="modules" className="px-3 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-foreground mb-3 sm:mb-4">
              Quatre modules <span className="text-primary bg-skoolife-yellow/10 px-2 py-1 rounded-lg">essentiels</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
              Tout ce dont un étudiant a besoin pour gérer sa vie quotidienne, intégré de manière transparente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="shadow-sm hover:shadow-skoolife-lg transition-all duration-300 group">
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-heading text-lg flex items-center justify-between">
                  Planificateur
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-sm">
                  Agenda clair, synchronisation avec les calendriers existants, rappels utiles qui ne submergent pas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-skoolife-lg transition-all duration-300 group">
              <CardHeader>
                <CheckSquare className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-heading text-lg flex items-center justify-between">
                  Tâches
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-sm">
                  Priorités simples, mode focus pour le travail en profondeur, saisie de tâches sans friction.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-skoolife-lg transition-all duration-300 group">
              <CardHeader>
                <CreditCard className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-heading text-lg flex items-center justify-between">
                  Finances étudiantes
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-sm">
                  Suivi des dépenses, configuration rapide de budget, aperçu clair de votre santé financière.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-skoolife-lg transition-all duration-300 group">
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-heading text-lg flex items-center justify-between">
                  Documents
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-sm">
                  Tous les PDF et documents importants au même endroit. Triez, étiquetez et recherchez instantanément.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Flèche de transition */}
      <div className="flex justify-center py-8">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>

      {/* Ce que Skoolife résout */}
      <section className="px-3 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-foreground mb-3 sm:mb-4">
              Problèmes que nous <span className="text-primary bg-skoolife-yellow/10 px-2 py-1 rounded-lg">résolvons</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-body">
              Cela vous dit quelque chose ? Vous n'êtes pas seul.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-start space-x-3 p-4 rounded-lg bg-card hover:shadow-sm transition-shadow">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-2 text-sm sm:text-base">Tâches et événements éparpillés</h3>
                <p className="text-muted-foreground font-body text-xs sm:text-sm leading-relaxed">
                  Plus besoin de jongler entre les applications de calendrier, les notes autocollantes et les rappels aléatoires.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-lg bg-card hover:shadow-sm transition-shadow">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-2 text-sm sm:text-base">Échéances et rendez-vous manqués</h3>
                <p className="text-muted-foreground font-body text-xs sm:text-sm leading-relaxed">
                  Des rappels intelligents et des priorités claires vous aident à rester au courant de tout.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-lg bg-card hover:shadow-sm transition-shadow">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-2 text-sm sm:text-base">Finances personnelles floues</h3>
                <p className="text-muted-foreground font-body text-xs sm:text-sm leading-relaxed">
                  Outils de suivi et de budgétisation simples conçus spécifiquement pour les étudiants.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-lg bg-card hover:shadow-sm transition-shadow">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-2 text-sm sm:text-base">Documents difficiles à retrouver</h3>
                <p className="text-muted-foreground font-body text-xs sm:text-sm leading-relaxed">
                  Tous vos fichiers importants organisés, étiquetés et consultables en quelques secondes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flèche de transition */}
      <div className="flex justify-center py-8">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>

      {/* Section Formulaire d'inscription */}
      <section id="inscription" className="px-3 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-foreground mb-3 sm:mb-4">
              Prêt à vous <span className="text-primary bg-skoolife-yellow/10 px-2 py-1 rounded-lg">organiser</span> ?
            </h2>
          </div>
          <SkoolifeWaitlistFormFR />
        </div>
      </section>

      {/* Section FAQ */}
      <section id="faq" className="px-3 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-foreground mb-3 sm:mb-4">
              Questions <span className="text-primary bg-skoolife-yellow/10 px-2 py-1 rounded-lg">fréquemment</span> posées
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-body">
              Tout ce que vous devez savoir sur Skoolife.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card rounded-lg px-6 shadow-sm hover:shadow-skoolife transition-shadow duration-200">
              <AccordionTrigger className="font-heading text-left">
                Quand Skoolife sera-t-il disponible ?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                Janvier 2026.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card rounded-lg px-6 shadow-sm hover:shadow-skoolife transition-shadow duration-200">
              <AccordionTrigger className="font-heading text-left">
                Quelles plateformes Skoolife supportera-t-il ?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                Skoolife est conçu mobile-first pour iOS et Android.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card rounded-lg px-6 shadow-sm hover:shadow-skoolife transition-shadow duration-200">
              <AccordionTrigger className="font-heading text-left">
                Combien coûtera Skoolife ?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                3,99 € par mois ou 39,99 € par an.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card rounded-lg px-6 shadow-sm hover:shadow-skoolife transition-shadow duration-200">
              <AccordionTrigger className="font-heading text-left">
                Puis-je synchroniser avec mon calendrier et mes outils existants ?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                Oui — Google Calendar et compte bancaire.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card rounded-lg px-6 shadow-sm hover:shadow-skoolife transition-shadow duration-200">
              <AccordionTrigger className="font-heading text-left">
                Mes données sont-elles sécurisées et privées ?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                Absolument. Nous utilisons un chiffrement standard de l'industrie et ne vendons jamais vos données personnelles. Vos informations académiques et financières restent privées et sécurisées. Vous pouvez exporter ou supprimer vos données à tout moment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card rounded-lg px-6 shadow-sm hover:shadow-skoolife transition-shadow duration-200">
              <AccordionTrigger className="font-heading text-left">
                Qu'est-ce qui rend Skoolife différent des autres applications étudiantes ?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                Skoolife se concentre sur l'expérience complète de la vie étudiante, pas seulement les aspects académiques. Nous combinons planification, tâches, finances et gestion de documents dans une seule application belle et facile à utiliser, conçue spécifiquement pour les étudiants post-secondaires.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card rounded-lg px-6 shadow-sm hover:shadow-skoolife transition-shadow duration-200">
              <AccordionTrigger className="font-heading text-left">
                Puis-je être testeur bêta ?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                Oui ! Lorsque vous rejoignez la liste d'attente, vous pouvez choisir d'être testeur bêta. Nous contacterons les testeurs bêta sélectionnés pour un accès anticipé et des sessions de retours avant le lancement public.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="bg-card border-t border-border px-3 sm:px-6 lg:px-8 py-8 sm:py-12 shadow-skoolife-lg">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <img 
                src="/lovable-uploads/b8c3645b-f96c-42ec-8bd6-f3bd829eba8e.png" 
                alt="Skoolife" 
                className="h-6 sm:h-8 w-auto mb-2 mx-auto md:mx-0"
              />
              <p className="text-xs sm:text-sm text-muted-foreground font-body">
                Gérer la vie étudiante, pas seulement les devoirs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-3 sm:gap-6 text-xs sm:text-sm">
              <button className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-body flex items-center justify-center group min-h-[44px] px-2">
                Politique de confidentialité
                <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-body flex items-center justify-center group min-h-[44px] px-2">
                Conditions d'utilisation
                <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-body flex items-center justify-center group min-h-[44px] px-2">
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