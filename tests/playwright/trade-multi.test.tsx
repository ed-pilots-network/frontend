import { test, expect } from '@playwright/test';

// Navigation tests
test('should navigate to the multi hop trade route page', async ({ page }) => {
  await page.goto('/trade/multi');
  // The new page should contain an h1 with "Elite Dangerous Pilots Network"
  await expect(page.locator('h1')).toContainText(
    'Multi Hop Trade Route Finder',
  );
});
