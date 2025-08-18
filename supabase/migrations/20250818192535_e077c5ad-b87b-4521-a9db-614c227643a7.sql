-- Supprimer toutes les tables existantes
DROP TABLE IF EXISTS public.lead_events CASCADE;
DROP TABLE IF EXISTS public.lead_scores CASCADE;  
DROP TABLE IF EXISTS public.leads CASCADE;

-- Créer une table simple pour la liste d'attente
CREATE TABLE public.waitlist (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    first_name TEXT,
    country TEXT,
    school TEXT,
    study_year TEXT,
    needs TEXT[],
    purchase_intent INTEGER,
    beta_optin BOOLEAN DEFAULT false,
    marketing_optin BOOLEAN DEFAULT false,
    privacy_accepted BOOLEAN NOT NULL DEFAULT false,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    utm_term TEXT,
    utm_content TEXT,
    referrer TEXT,
    device_type TEXT,
    locale TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Activer RLS sur la table
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre les insertions anonymes (pour le formulaire)
CREATE POLICY "Allow anonymous inserts on waitlist"
ON public.waitlist
FOR INSERT
TO anon
WITH CHECK (true);

-- Pas de politique SELECT = pas de lecture publique autorisée

-- Créer une fonction pour mettre à jour le timestamp
CREATE OR REPLACE FUNCTION public.update_waitlist_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Créer le trigger pour la mise à jour automatique du timestamp
CREATE TRIGGER update_waitlist_updated_at
    BEFORE UPDATE ON public.waitlist
    FOR EACH ROW
    EXECUTE FUNCTION public.update_waitlist_updated_at();