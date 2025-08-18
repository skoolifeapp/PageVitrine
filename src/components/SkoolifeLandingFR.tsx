import { SkoolifeHeaderFR } from "./SkoolifeHeaderFR";
import { SkoolifeWaitlistFormFR } from "./SkoolifeWaitlistFormFR";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, CheckSquare, CreditCard, FileText, CheckCircle } from "lucide-react";

export const SkoolifeLandingFR = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkoolifeHeaderFR />

      {/* Section Héro */}
      <section className="px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
            {/* Contenu texte */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6 leading-tight">
                Skoolife vous aide à gérer votre{" "}
                <span className="text-primary">vie étudiante</span> — pas seulement vos devoirs.
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 font-body leading-relaxed">
                Planificateur, tâches, finances et documents. Tout au même endroit.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button 
                  onClick={() => scrollToSection('inscription')}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring font-body px-8 py-3 text-lg"
                >
                  Rejoindre la liste d'attente
                </Button>
                <Button 
                  onClick={() => scrollToSection('modules')}
                  variant="outline"
                  size="lg"
                  className="font-body px-8 py-3 text-lg border-border hover:bg-accent"
                >
                  En savoir plus
                </Button>
              </div>
            </div>

            {/* Image des mockups */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative max-w-xl animate-slide-in-right">
                <img 
                  src="/lovable-uploads/025c2b45-0d0e-4553-9ef5-a78112ebad64.png" 
                  alt="Interface Skoolife - Tableau de bord et section finances sur mobile"
                  className="w-full max-w-lg mx-auto drop-shadow-2xl hover-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les 4 modules */}
      <section id="modules" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
              Quatre modules essentiels
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Tout ce dont un étudiant a besoin pour gérer sa vie quotidienne, intégré de manière transparente.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-skoolife transition-shadow duration-200">
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-heading text-lg">Planificateur</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-sm">
                  Agenda clair, synchronisation avec les calendriers existants, rappels utiles qui ne submergent pas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-skoolife transition-shadow duration-200">
              <CardHeader>
                <CheckSquare className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-heading text-lg">Tâches</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-sm">
                  Priorités simples, mode focus pour le travail en profondeur, saisie de tâches sans friction.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-skoolife transition-shadow duration-200">
              <CardHeader>
                <CreditCard className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-heading text-lg">Finances étudiantes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-sm">
                  Suivi des dépenses, configuration rapide de budget, aperçu clair de votre santé financière.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-skoolife transition-shadow duration-200">
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-heading text-lg">Documents</CardTitle>
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

      {/* Ce que Skoolife résout */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
              Problèmes que nous résolvons
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Cela vous dit quelque chose ? Vous n'êtes pas seul.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1">Tâches et événements éparpillés</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Plus besoin de jongler entre les applications de calendrier, les notes autocollantes et les rappels aléatoires.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1">Échéances et rendez-vous manqués</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Des rappels intelligents et des priorités claires vous aident à rester au courant de tout.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1">Finances personnelles floues</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Outils de suivi et de budgétisation simples conçus spécifiquement pour les étudiants.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1">Documents difficiles à retrouver</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Tous vos fichiers importants organisés, étiquetés et consultables en quelques secondes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Formulaire d'inscription */}
      <section id="inscription" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
              Prêt à vous organiser ?
            </h2>
          </div>
          <SkoolifeWaitlistFormFR />
        </div>
      </section>

      {/* Section FAQ */}
      <section id="faq" className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
              Questions fréquemment posées
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Tout ce que vous devez savoir sur Skoolife.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="font-heading text-left">
                Quand Skoolife sera-t-il disponible ?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                Janvier 2026.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="font-heading text-left">
                Quelles plateformes Skoolife supportera-t-il ?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                Skoolife est conçu mobile-first pour iOS et Android.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="font-heading text-left">
                Combien coûtera Skoolife ?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                3,99 € par mois ou 39,99 € par an.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="font-heading text-left">
                Puis-je synchroniser avec mon calendrier et mes outils existants ?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                Oui — Google Calendar et compte bancaire.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="font-heading text-left">
                Mes données sont-elles sécurisées et privées ?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                Absolument. Nous utilisons un chiffrement standard de l'industrie et ne vendons jamais vos données personnelles. Vos informations académiques et financières restent privées et sécurisées. Vous pouvez exporter ou supprimer vos données à tout moment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="font-heading text-left">
                Qu'est-ce qui rend Skoolife différent des autres applications étudiantes ?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                Skoolife se concentre sur l'expérience complète de la vie étudiante, pas seulement les aspects académiques. Nous combinons planification, tâches, finances et gestion de documents dans une seule application belle et facile à utiliser, conçue spécifiquement pour les étudiants post-secondaires.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card rounded-lg px-6">
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
      <footer className="bg-card border-t border-border px-4 sm:px-6 lg:px-8 py-12">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/b8c3645b-f96c-42ec-8bd6-f3bd829eba8e.png" 
                alt="Skoolife" 
                className="h-8 w-auto mb-2"
              />
              <p className="text-sm text-muted-foreground font-body">
                Gérer la vie étudiante, pas seulement les devoirs.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <button className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-body">
                Politique de confidentialité
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-body">
                Conditions d'utilisation
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-body">
                Paramètres des cookies
              </button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-xs text-muted-foreground font-body">
              © 2024 Skoolife. Tous droits réservés. Pré-lancement — bientôt disponible.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};