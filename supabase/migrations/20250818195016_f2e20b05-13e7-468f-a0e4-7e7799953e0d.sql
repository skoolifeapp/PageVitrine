-- Fix critical security vulnerabilities

-- 1. Create admin role enum for future user management
CREATE TYPE IF NOT EXISTS public.app_role AS ENUM ('admin', 'user');

-- 2. Create user_roles table for role management
CREATE TABLE IF NOT EXISTS public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 3. Create security definer function to check admin role (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.is_admin(check_user_id UUID DEFAULT auth.uid())
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 
    FROM public.user_roles 
    WHERE user_id = check_user_id 
    AND role = 'admin'
  );
$$;

-- 4. Fix existing trigger functions security (prevent SQL injection)
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.update_waitlist_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;

-- 5. Add critical RLS policies for waitlist table to protect customer data
CREATE POLICY "Only admins can view waitlist data"
ON public.waitlist
FOR SELECT
TO authenticated
USING (public.is_admin());

CREATE POLICY "Only admins can update waitlist data"
ON public.waitlist
FOR UPDATE
TO authenticated
USING (public.is_admin());

CREATE POLICY "Only admins can delete waitlist data"
ON public.waitlist
FOR DELETE
TO authenticated
USING (public.is_admin());

-- 6. Add policies for user_roles table
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Only admins can manage roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.is_admin());

-- 7. Add trigger to waitlist table for updated_at
DROP TRIGGER IF EXISTS update_waitlist_updated_at_trigger ON public.waitlist;
CREATE TRIGGER update_waitlist_updated_at_trigger
    BEFORE UPDATE ON public.waitlist
    FOR EACH ROW
    EXECUTE FUNCTION public.update_waitlist_updated_at();