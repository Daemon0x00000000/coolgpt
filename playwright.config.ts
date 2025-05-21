import { defineConfig, devices } from '@playwright/test'
import type { ConfigOptions } from '@nuxt/test-utils/playwright'

export default defineConfig<ConfigOptions>({
    testDir: './tests/e2e',
    outputDir: './test-results',
    /* Temps maximum en millisecondes pour chaque test */
    timeout: 30000,
    expect: {
        /* Délai d'attente maximum pour les assertions */
        timeout: 5000
    },
    /* Exécute les tests de manière isolée */
    fullyParallel: true,
    /* Ne pas exécuter plus de 1 test à la fois */
    workers: 1,
    /* Reporter pour générer les rapports de test */
    reporter: 'html',
    /* Configuration partagée pour tous les projets */
    use: {
        /* URL de base pour les navigations */
        baseURL: 'http://localhost:3000',
        /* Captures d'écran automatiques lors des échecs */
        screenshot: 'only-on-failure',
        /* Collecte de traces en cas d'échec */
        trace: 'on-first-retry',
        /* Enregistrement d'une vidéo lors des échecs */
        video: 'on-first-retry',
    },
    /* Configuration des navigateurs à utiliser */
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        /*
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },

         */
        /* Configuration pour les tests mobiles (optionnel) */
        /*
        {
            name: 'Mobile Chrome',
            use: { ...devices['Pixel 5'] },
        },
        {
            name: 'Mobile Safari',
            use: { ...devices['iPhone 12'] },
        },

         */

    ],
    /* Hook pour démarrer le serveur Nuxt avant les tests */
    webServer: {
        command: 'npm run dev',
        url: 'http://localhost:3000',
        reuseExistingServer: !process.env.CI,
        timeout: 120000,
    },
})
