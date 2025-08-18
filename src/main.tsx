import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { preloadCriticalRoutes, optimizeFirstLoad } from './lib/static-optimization'

// Optimisations pour site statique
optimizeFirstLoad();
preloadCriticalRoutes();

createRoot(document.getElementById("root")!).render(<App />);
