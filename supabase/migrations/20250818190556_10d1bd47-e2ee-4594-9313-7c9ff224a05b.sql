-- Tighten RLS to prevent public reads of sensitive lead data while preserving anon inserts for the public form

-- Ensure RLS is enabled on relevant tables
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lead_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lead_scores ENABLE ROW LEVEL SECURITY;

-- Drop overly permissive SELECT (and UPDATE) policies if they exist
DO $$ BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'leads' AND policyname = 'Users can view their own leads'
  ) THEN
    DROP POLICY "Users can view their own leads" ON public.leads;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lead_events' AND policyname = 'Anyone can view lead events'
  ) THEN
    DROP POLICY "Anyone can view lead events" ON public.lead_events;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lead_scores' AND policyname = 'Anyone can view lead scores'
  ) THEN
    DROP POLICY "Anyone can view lead scores" ON public.lead_scores;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lead_scores' AND policyname = 'Anyone can update lead scores'
  ) THEN
    DROP POLICY "Anyone can update lead scores" ON public.lead_scores;
  END IF;
END $$;

-- Recreate explicit anon INSERT policies if missing (write-only from the public site)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'leads' AND cmd = 'INSERT'
  ) THEN
    CREATE POLICY "Leads insert (anon only)"
    ON public.leads
    FOR INSERT
    TO anon
    WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lead_events' AND cmd = 'INSERT'
  ) THEN
    CREATE POLICY "Lead events insert (anon only)"
    ON public.lead_events
    FOR INSERT
    TO anon
    WITH CHECK (true);
  END IF;
END $$;