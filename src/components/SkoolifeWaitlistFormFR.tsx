import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface WaitlistData {
  email: string;
  firstName: string;
  country: string;
  school: string;
  studyYear: string;
  mainNeeds: string[];
  purchaseIntent: number;
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
    purchaseIntent: 0,
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
        purchase_intent: formData.purchaseIntent > 0 ? formData.purchaseIntent : null,
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
          setErrors({ email: "Cet email est déjà sur la liste. Tu recevras bien les infos :)" });
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
      <Card className="max-w-md mx-auto animate-fade-in mb-20 sm:mb-0">
        <CardContent className="pt-6 text-center">
          <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
            Vous êtes inscrit ! 
          </h3>
          <p className="text-muted-foreground font-body">
            Nous vous contacterons dès que Skoolife sera disponible.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card className="max-w-2xl mx-auto mb-20 sm:mb-0">
        <CardHeader className="pb-4 sm:pb-6">
          <CardTitle className="text-xl sm:text-2xl font-heading text-center">Rejoindre la liste d'attente Skoolife</CardTitle>
          <CardDescription className="text-center font-body text-sm sm:text-base">
            Soyez informés du lancement et obtenez un accès anticipé aux fonctionnalités bêta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Erreur générale */}
            {errors.general && (
              <div className="p-3 text-xs sm:text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
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
                className={`font-body text-sm ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                placeholder="votre.email@exemple.com"
                required
              />
              {errors.email && (
                <p className="text-xs sm:text-sm text-destructive font-body">{errors.email}</p>
              )}
            </div>

            {/* Études */}
            <div className="space-y-2">
              <Label htmlFor="studyYear" className="font-body text-sm">Études</Label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, studyYear: value }))}>
                <SelectTrigger className="font-body text-sm">
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

            {/* Besoins principaux */}
            <div className="space-y-3">
              <Label className="font-body text-sm">Besoins principaux (sélectionnez tout ce qui s'applique)</Label>
              <div className="flex flex-wrap gap-2">
                {needsOptions.map((need) => (
                  <label 
                    key={need}
                    className={`inline-flex items-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-body cursor-pointer transition-all ${
                      formData.mainNeeds.includes(need) 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                    onClick={() => handleNeedsChange(need, !formData.mainNeeds.includes(need))}
                  >
                    <Checkbox
                      id={need}
                      checked={formData.mainNeeds.includes(need)}
                      onCheckedChange={(checked) => handleNeedsChange(need, checked as boolean)}
                      className="sr-only"
                    />
                    {need}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {/* Prénom */}
              <div className="space-y-2">
                <Label htmlFor="firstName" className="font-body text-sm">Prénom</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  className="font-body text-sm"
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
                  className="font-body text-sm"
                  placeholder="France"
                />
              </div>

              {/* École */}
              <div className="space-y-2">
                <Label htmlFor="school" className="font-body text-sm">École/Université</Label>
                <Input
                  id="school"
                  value={formData.school}
                  onChange={(e) => setFormData(prev => ({ ...prev, school: e.target.value }))}
                  className="font-body text-sm"
                  placeholder="Université de la Sorbonne"
                />
              </div>
            </div>

            {/* Intention d'achat avec radios - Simplifié sur mobile */}
            <div className="space-y-3">
              <Label className="font-body text-sm">Intention d'achat</Label>
              <RadioGroup 
                value={formData.purchaseIntent.toString()} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, purchaseIntent: parseInt(value) }))}
                className="grid grid-cols-1 sm:grid-cols-5 gap-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1" id="intent-1" />
                  <Label htmlFor="intent-1" className="text-xs sm:text-sm font-body cursor-pointer">
                    1 - Juste curieux
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2" id="intent-2" />
                  <Label htmlFor="intent-2" className="text-xs sm:text-sm font-body cursor-pointer">
                    2 - Peu probable
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3" id="intent-3" />
                  <Label htmlFor="intent-3" className="text-xs sm:text-sm font-body cursor-pointer">
                    3 - Neutre
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="4" id="intent-4" />
                  <Label htmlFor="intent-4" className="text-xs sm:text-sm font-body cursor-pointer">
                    4 - Probable
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="5" id="intent-5" />
                  <Label htmlFor="intent-5" className="text-xs sm:text-sm font-body cursor-pointer">
                    5 - Prêt à payer
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Testeur bêta */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="betaTester"
                checked={formData.betaTester}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, betaTester: checked as boolean }))}
              />
              <Label htmlFor="betaTester" className="text-xs sm:text-sm font-body cursor-pointer">
                Je suis intéressé(e) pour être testeur bêta
              </Label>
            </div>

            {/* Consentement confidentialité - Requis */}
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="privacyConsent"
                  checked={formData.privacyConsent}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, privacyConsent: checked as boolean }))}
                  className={errors.privacyConsent ? 'border-destructive' : ''}
                  required
                />
                <Label htmlFor="privacyConsent" className="text-xs sm:text-sm font-body cursor-pointer leading-tight">
                  J'accepte la politique de confidentialité et les conditions d'utilisation *
                </Label>
              </div>
              {errors.privacyConsent && (
                <p className="text-xs sm:text-sm text-destructive font-body">{errors.privacyConsent}</p>
              )}
            </div>

            {/* Opt-in marketing */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="marketingOptIn"
                checked={formData.marketingOptIn}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, marketingOptIn: checked as boolean }))}
              />
              <Label htmlFor="marketingOptIn" className="text-xs sm:text-sm font-body cursor-pointer">
                Je souhaite recevoir des actualités sur Skoolife (facultatif)
              </Label>
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring font-body disabled:opacity-50 text-sm sm:text-base py-2.5 sm:py-3"
              size="lg"
            >
              {isSubmitting ? "Inscription en cours..." : "Rejoindre la liste d'attente"}
            </Button>
          </form>
        </CardContent>
      </Card>

    </>
  );
};