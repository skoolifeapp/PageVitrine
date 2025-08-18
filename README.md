# Skoolife - Site Web Statique

Site web de présentation et liste d'attente pour Skoolife, l'application de gestion de la vie étudiante.

## 🏗️ Architecture

Ce projet est configuré comme un **site web statique** optimisé pour les performances et le SEO.

### Technologies utilisées

- **React 18** avec TypeScript
- **Vite** - Build tool optimisé pour sites statiques
- **Tailwind CSS** - Design system et styling
- **shadcn-ui** - Composants UI
- **Supabase** - Backend pour le formulaire de liste d'attente
- **React Router** - Routing côté client

### Optimisations statiques

✅ **Performance**
- Code splitting automatique
- Lazy loading des composants
- Cache optimisé pour les assets
- Service Worker pour cache offline
- Compression et minification

✅ **SEO**
- Meta tags optimisés français/anglais
- Schema.org JSON-LD
- Open Graph / Twitter Cards
- Sitemap automatique
- URLs canoniques

✅ **Hébergement**
- Configuration Netlify (`netlify.toml`)
- Configuration Apache (`.htaccess`)
- Redirections SPA (`_redirects`)
- Manifest PWA

## 🚀 Développement

```bash
# Installation
npm install

# Développement local
npm run dev

# Build statique
npm run build

# Prévisualiser le build
npm run preview
```

## 📁 Structure du projet

```
src/
├── components/
│   ├── ui/              # Composants shadcn-ui
│   ├── SkoolifeLandingFR.tsx    # Page d'accueil française
│   └── SkoolifeWaitlistFormFR.tsx # Formulaire liste d'attente
├── pages/
│   ├── Index.tsx        # Route principale
│   ├── WaitlistPage.tsx # Page dédiée liste d'attente
│   └── NotFound.tsx     # Page 404
├── lib/
│   ├── utils.ts         # Utilitaires généraux
│   └── static-optimization.ts # Optimisations statiques
└── integrations/
    └── supabase/        # Configuration Supabase
```

## 🌐 Déploiement

### Netlify (Recommandé)
Le projet inclut `netlify.toml` avec configuration automatique :
```bash
npm run build
# Déployer le dossier /dist
```

### Vercel
```bash
npm run build
# Déployer le dossier /dist avec redirect config
```

### Apache/Nginx
Le fichier `.htaccess` est inclus pour Apache.
Pour Nginx, configurer les redirections SPA manuellement.

## 🗃️ Base de données

### Supabase - Table `waitlist`
```sql
- id (uuid, primary key)
- email (text, required)
- first_name (text)
- country, school, study_year (text)
- needs (array)
- purchase_intent (integer)
- beta_optin, marketing_optin, privacy_accepted (boolean)
- utm_* fields (text) - tracking marketing
- created_at, updated_at (timestamp)
```

### Sécurité RLS
- ✅ **INSERT** : Autorisé pour utilisateurs anonymes
- ❌ **SELECT/UPDATE/DELETE** : Interdit (protection des données)

## 🎨 Design System

Le projet utilise un design system basé sur Tailwind avec tokens sémantiques :
- Variables CSS dans `src/index.css`
- Configuration dans `tailwind.config.ts`
- Composants avec variants dans `src/components/ui/`

## 📊 Analytics

Les champs UTM dans le formulaire permettent le tracking des campagnes marketing :
- `utm_source`, `utm_medium`, `utm_campaign`
- `utm_term`, `utm_content`
- `referrer`, `device_type`, `locale`

## 🔧 Configuration

### Variables d'environnement
```bash
# .env.local (ne pas commiter)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

### Build optimisations
- Terser minification
- Tree-shaking automatique
- Asset hashing pour cache-busting
- Manual chunks pour vendor libs

---

**Status** : Site statique prêt pour production
**Dernière mise à jour** : 2024
