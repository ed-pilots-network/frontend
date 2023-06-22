import { test, expect } from '@playwright/test';

test('should navigate to the home page', async ({ page }) => {
  await page.goto('/');
  // The new page should contain an h1 with "Elite Dangerous Pilots Network"
  await expect(page.locator('h1')).toContainText(
    'Elite Dangerous Pilots Network',
  );
});

test('should navigate to the faq page', async ({ page }) => {
  await page.goto('/faq');
  await expect(page.locator('h2')).toContainText('FAQ');
});
