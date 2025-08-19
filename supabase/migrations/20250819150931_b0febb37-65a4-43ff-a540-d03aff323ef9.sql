-- Supprimer la colonne needs de la table waitlist
ALTER TABLE public.waitlist DROP COLUMN IF EXISTS needs;