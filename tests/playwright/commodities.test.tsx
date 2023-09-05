import { test, expect } from '@playwright/test';

test('should navigate to the commodities page', async ({ page }) => {
  await page.goto('/commodities');
  await expect(page.locator('h1')).toContainText('Commodities');
});
