// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// After a new deploy, the page files an already-open tab expects no longer exist.
// Reload once to pick up the new version instead of leaving the click doing nothing.
const RELOAD_KEY = 'qesdo:reloaded-after-deploy';
window.addEventListener('vite:preloadError', (event) => {
  try {
    if (sessionStorage.getItem(RELOAD_KEY)) return;
    sessionStorage.setItem(RELOAD_KEY, '1');
  } catch {
    // Storage unavailable: still reload, the browser will fetch the fresh version.
  }
  event.preventDefault();
  window.location.reload();
});
window.addEventListener('load', () => {
  try { sessionStorage.removeItem(RELOAD_KEY); } catch { /* ignore */ }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);