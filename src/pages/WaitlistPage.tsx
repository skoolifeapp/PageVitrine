import { SkoolifeHeaderFR } from "@/components/SkoolifeHeaderFR";
import { SkoolifeWaitlistFormFR } from "@/components/SkoolifeWaitlistFormFR";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const WaitlistPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkoolifeHeaderFR />
      
      {/* Bouton retour */}
      <div className="px-4 sm:px-6 lg:px-8 pt-8">
        <div className="container max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>

      {/* Section principale */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
              Rejoindre la liste d'attente Skoolife
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Soyez le premier à découvrir une vie étudiante plus calme et organisée. Rejoignez des milliers d'étudiants déjà sur la liste d'attente.
            </p>
          </div>
          
          <SkoolifeWaitlistFormFR />
        </div>
      </section>
    </div>
  );
};

export default WaitlistPage;