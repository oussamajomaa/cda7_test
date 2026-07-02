 
const { test, expect } = require("@playwright/test");

test("Login test", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.fill("#email", "machin@email.fr");
    await page.fill("#password", "azertyTEST222!");
    await page.click("#submit");
    const messgae = page.locator("#message");
    await expect(messgae).toBeVisible();
    await expect(messgae).toHaveText("Connexion réussie !");
})