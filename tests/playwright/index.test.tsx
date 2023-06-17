import { test, expect } from '@playwright/test';

test('should navigate to the home page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/');
  // The new page should contain an h2 with "Hello Mom!"
  await expect(page.locator('h2')).toContainText('Welcome to EDPN!');
});
