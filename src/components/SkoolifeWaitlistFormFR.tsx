import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface WaitlistData {
  email: string;
  firstName: string;
  country: string;
  school: string;
  studyYear: string;
  mainNeeds: string[];
  purchaseIntent: string;
  betaTester: boolean;
  privacyConsent: boolean;
  marketingOptIn: boolean;
  // Champs cachés
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  referrer: string;
  deviceType: string;
  locale: string;
  cookieConsentVersion: string;
  timestamp: number;
}

export const SkoolifeWaitlistFormFR = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<WaitlistData>({
    email: "",
    firstName: "",
    country: "",
    school: "",
    studyYear: "",
    mainNeeds: [],
    purchaseIntent: "",
    betaTester: false,
    privacyConsent: false,
    marketingOptIn: false,
    // Champs cachés avec valeurs par défaut
    utmSource: new URLSearchParams(window.location.search).get('utm_source') || '',
    utmMedium: new URLSearchParams(window.location.search).get('utm_medium') || '',
    utmCampaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
    utmTerm: new URLSearchParams(window.location.search).get('utm_term') || '',
    utmContent: new URLSearchParams(window.location.search).get('utm_content') || '',
    referrer: document.referrer,
    deviceType: /Mobile|Android|iPhone|iPad/.test(navigator.userAgent) ? 'mobile' : 'desktop',
    locale: navigator.language,
    cookieConsentVersion: '1.0',
    timestamp: Date.now(),
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const needsOptions = [
    "Gestion du temps",
    "Tâches à faire",
    "Finances étudiantes", 
    "Motivation & concentration",
    "Tout-en-un"
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse email valide";
    }
    
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = "Le consentement à la politique de confidentialité est requis";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Préparer les données pour Supabase
      const payload = {
        email: formData.email,
        first_name: formData.firstName || null,
        country: formData.country || null,
        school: formData.school || null,
        study_year: formData.studyYear || null,
        needs: formData.mainNeeds.length > 0 ? formData.mainNeeds : null,
        purchase_intent: formData.purchaseIntent ? parseInt(formData.purchaseIntent) : null,
        beta_optin: formData.betaTester,
        marketing_optin: formData.marketingOptIn,
        privacy_accepted: formData.privacyConsent,
        utm_source: formData.utmSource || null,
        utm_medium: formData.utmMedium || null,
        utm_campaign: formData.utmCampaign || null,
        utm_term: formData.utmTerm || null,
        utm_content: formData.utmContent || null,
        referrer: formData.referrer || null,
        device_type: formData.deviceType || null,
        locale: formData.locale || null,
      };

      // Insérer dans Supabase
      const { error: insertError } = await supabase
        .from("waitlist")
        .insert([payload]);

      if (insertError) {
        if (insertError.code === '23505') { // Contrainte d'unicité violée (email déjà existant)
          setErrors({ email: "Cet email est déjà inscrit sur la liste d'attente." });
        } else {
          setErrors({ general: "Erreur lors de l'inscription. Veuillez réessayer." });
          console.error('Erreur Supabase:', insertError);
        }
        return;
      }

      // Fallback localStorage en cas d'échec partiel
      const submissionData = { ...formData, timestamp: Date.now() };
      try {
        const existing = localStorage.getItem('skoolife_waitlist');
        const waitlist = existing ? JSON.parse(existing) : [];
        waitlist.push(submissionData);
        localStorage.setItem('skoolife_waitlist', JSON.stringify(waitlist));
      } catch (storageError) {
        console.log('Échec du stockage localStorage:', storageError);
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      setErrors({ general: "Erreur lors de l'inscription. Veuillez réessayer." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNeedsChange = (need: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        mainNeeds: [...prev.mainNeeds, need]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        mainNeeds: prev.mainNeeds.filter(n => n !== need)
      }));
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto animate-fade-in">
        <CardContent className="pt-6 text-center">
          <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
            Vous êtes inscrit ! 
          </h3>
          <p className="text-muted-foreground font-body">
            Vérifiez votre boîte mail pour confirmer votre place sur la liste d'attente.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-skoolife">
      <CardHeader className="pb-6">
        <CardTitle className="text-xl sm:text-2xl font-heading text-center">Rejoindre la liste d'attente Skoolife</CardTitle>
        <CardDescription className="text-center font-body text-sm sm:text-base">
          Soyez le premier informé du lancement et obtenez un accès anticipé aux fonctionnalités bêta.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Erreur générale */}
          {errors.general && (
            <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
              {errors.general}
            </div>
          )}
          
          {/* Email - Requis */}
          <div className="space-y-2">
            <Label htmlFor="email" className="font-body text-sm">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className={`font-body min-h-[44px] ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
              placeholder="votre.email@exemple.com"
              required
            />
            {errors.email && (
              <p className="text-sm text-destructive font-body">{errors.email}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Prénom */}
            <div className="space-y-2">
              <Label htmlFor="firstName" className="font-body text-sm">Prénom</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                className="font-body min-h-[44px]"
                placeholder="Alex"
              />
            </div>

            {/* Pays */}
            <div className="space-y-2">
              <Label htmlFor="country" className="font-body text-sm">Pays</Label>
              <Input
                id="country"
                value={formData.country}
                onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                className="font-body min-h-[44px]"
                placeholder="France"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* École */}
            <div className="space-y-2">
              <Label htmlFor="school" className="font-body text-sm">École/Université</Label>
              <Input
                id="school"
                value={formData.school}
                onChange={(e) => setFormData(prev => ({ ...prev, school: e.target.value }))}
                className="font-body min-h-[44px]"
                placeholder="Université de la Sorbonne"
              />
            </div>

            {/* Études */}
            <div className="space-y-2">
              <Label htmlFor="studyYear" className="font-body text-sm">Études</Label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, studyYear: value }))}>
                <SelectTrigger className="font-body min-h-[44px]">
                  <SelectValue placeholder="Sélectionnez vos études" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BTS">BTS</SelectItem>
                  <SelectItem value="Licence">Licence</SelectItem>
                  <SelectItem value="Bachelor">Bachelor</SelectItem>
                  <SelectItem value="Master">Master</SelectItem>
                  <SelectItem value="Mastère">Mastère</SelectItem>
                  <SelectItem value="BUT">BUT</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Besoins principaux */}
          <div className="space-y-3">
            <Label className="font-body text-sm">Besoins principaux (sélectionnez tout ce qui s'applique)</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {needsOptions.map((need) => (
                <div key={need} className="flex items-center space-x-3 p-2 hover:bg-muted/30 rounded-lg transition-colors">
                  <Checkbox
                    id={need}
                    checked={formData.mainNeeds.includes(need)}
                    onCheckedChange={(checked) => handleNeedsChange(need, checked as boolean)}
                    className="min-w-[20px] min-h-[20px]"
                  />
                  <Label htmlFor={need} className="text-sm font-body cursor-pointer leading-tight">
                    {need}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Intention d'achat */}
          <div className="space-y-2">
            <Label htmlFor="purchaseIntent" className="font-body text-sm">Intention d'achat (échelle 1-5)</Label>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, purchaseIntent: value }))}>
              <SelectTrigger className="font-body min-h-[44px]">
                <SelectValue placeholder="Quelle est la probabilité que vous achetiez ?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 - Peu probable</SelectItem>
                <SelectItem value="2">2 - Plutôt peu probable</SelectItem>
                <SelectItem value="3">3 - Neutre</SelectItem>
                <SelectItem value="4">4 - Probable</SelectItem>
                <SelectItem value="5">5 - Très probable</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Testeur bêta */}
          <div className="flex items-start space-x-3 p-3 hover:bg-muted/30 rounded-lg transition-colors">
            <Checkbox
              id="betaTester"
              checked={formData.betaTester}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, betaTester: checked as boolean }))}
              className="min-w-[20px] min-h-[20px] mt-0.5"
            />
            <Label htmlFor="betaTester" className="text-sm font-body cursor-pointer leading-tight">
              Je suis intéressé(e) pour être testeur bêta
            </Label>
          </div>

          {/* Consentement confidentialité - Requis */}
          <div className="space-y-2">
            <div className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-muted/30 transition-colors">
              <Checkbox
                id="privacyConsent"
                checked={formData.privacyConsent}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, privacyConsent: checked as boolean }))}
                className={`min-w-[20px] min-h-[20px] mt-0.5 ${errors.privacyConsent ? 'border-destructive' : ''}`}
                required
              />
              <Label htmlFor="privacyConsent" className="text-sm font-body cursor-pointer leading-tight">
                J'accepte la politique de confidentialité et les conditions d'utilisation *
              </Label>
            </div>
            {errors.privacyConsent && (
              <p className="text-sm text-destructive font-body">{errors.privacyConsent}</p>
            )}
          </div>

          {/* Opt-in marketing */}
          <div className="flex items-start space-x-3 p-3 hover:bg-muted/30 rounded-lg transition-colors">
            <Checkbox
              id="marketingOptIn"
              checked={formData.marketingOptIn}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, marketingOptIn: checked as boolean }))}
              className="min-w-[20px] min-h-[20px] mt-0.5"
            />
            <Label htmlFor="marketingOptIn" className="text-sm font-body cursor-pointer leading-tight">
              Je souhaite recevoir des actualités sur Skoolife (facultatif)
            </Label>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring font-body disabled:opacity-50 min-h-[48px] text-base shadow-skoolife hover:shadow-skoolife-lg transition-all duration-200"
            size="lg"
          >
            {isSubmitting ? "Inscription en cours..." : "Rejoindre la liste d'attente"}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-4 font-body">
          Vos données sont stockées de manière sécurisée et ne seront utilisées que pour vous contacter au sujet de Skoolife.
        </p>
      </CardContent>
    </Card>
  );
};