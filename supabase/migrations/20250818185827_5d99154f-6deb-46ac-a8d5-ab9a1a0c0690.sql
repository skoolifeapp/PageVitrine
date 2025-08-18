-- Add missing privacy_accepted column to leads table
ALTER TABLE public.leads 
ADD COLUMN IF NOT EXISTS privacy_accepted boolean NOT NULL DEFAULT false;