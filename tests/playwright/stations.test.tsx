import { test, expect } from '@playwright/test';

// Navigation tests
test('should navigate to the stations page', async ({ page }) => {
  await page.goto('/stations');
  // The new page should contain an h1 with "Elite Dangerous Pilots Network"
  await expect(page.locator('h1')).toContainText('Stations');
});
