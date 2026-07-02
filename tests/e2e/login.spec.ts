const { test, expect } = require('@playwright/test');

test("Tester la connexion", async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Remplir les champs et cliquer
    await page.getByLabel('Email').fill('exemple@gmail.com');
    await page.getByLabel('Password').fill('12345678');
    await page.getByRole('button', { name: 'Login' }).click();
    
    // Attendre que le message de succès soit visible et correct
    // Playwright va "attendre" (auto-wait) que le texte apparaisse dans le DOM
    await expect(page.locator('#message')).toHaveText('Connexion réussie !');
});