import { test, expect } from '@playwright/test';
test.describe('register', () => {

    test('Should register and nevigate', async ({ page }) => {

        // ===== Home page  =====
        await page.goto('https://farazi.staging.dokandev.com/login');
        console.log('✅ 1 ');

        // ===== Click sign up page =====
        await page.click("//p[contains(@class,'text-sm text-dark-500')]//a[1]");
        console.log('✅ 2 ');
        await page.waitForTimeout(2000);

        // ===== Type User name =====
        await page.locator('#reg-firstname').fill('mehedi');
        await page.locator('#reg-lastname').fill('mehedi');
        console.log('✅ 3 ');

        // ===== type email  =====
        await page.locator('#reg-email').fill('mh2959599@gmail.com');
        console.log('✅ 4 ');
        // ===== type password  =====
        await page.locator('#reg-password').fill('m12345678');
        await page.locator('#reg-password-confirmation').fill('mehedi12345');
        console.log('✅ 5 ');

        // ===== click check-marks  =====
        await page.locator('#marketingConsents').click();
        console.log('✅ 6 ');
        await page.locator('#marketingConsents').click();
        await page.waitForTimeout(2000);

        // =====  click register button  =====
        await page.locator("//p[contains(@class,'text-sm text-dark-500')]//a[1]").click();
        console.log('✅ 7 ');
        await page.waitForTimeout(2000);

        // ===== Login =====
        await page.locator('#reg-email').fill('mh2959599@gmail.com');
        await page.locator('#login-password').fill('m12345678');

        await page.locator("(//button[@type='submit'])[3]").click();
        console.log('✅ 8');
        await page.waitForTimeout(2000);
        // ===== Assertion =====
        await expect(page).not.toHaveURL("(//button[@type='submit'])[3]"); // login successful 
        console.log('✅ 9. Login Success');


    });
}); 