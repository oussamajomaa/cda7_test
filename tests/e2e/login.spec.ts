const { test, expect} = require('@playwright/test')

test("Tester la connexion", async ({page})=>{
    await page.goto('http://localhost:3000')
    await page.getByLabel('Email').fill('exemple@gmail.com')
    await page.getByLabel('Password').fill('12345678')
    await page.getByRole('button', {name:'Login'}).click()
    const message = page.locator('#message')
    await expect(message).toHaveText('Connexion réussie !')
})