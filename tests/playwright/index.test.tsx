import { test, expect } from '@playwright/test';

test('should navigate to the home page', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h2')).toContainText('Welcome to EDPN!');
});

test('should navigate to the faq page', async ({ page }) => {
  await page.goto('/faq');
  await expect(page.locator('h2')).toContainText('FAQ');
});
