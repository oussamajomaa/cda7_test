import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  // ... vos autres configurations ...

  /* Configurer le serveur local avant de lancer les tests */
  webServer: {
    command: 'npm run start',       // La commande pour lancer votre server.js
    url: 'http://localhost:3000',   // L'URL que Playwright doit attendre avant de démarrer
    reuseExistingServer: !process.env.CI, // Réutilise le serveur s'il tourne déjà sur votre PC
    timeout: 10 * 1000,             // Temps max accordé au serveur pour démarrer (10s)
  },
});