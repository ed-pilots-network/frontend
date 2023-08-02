import { test, expect } from '@playwright/test';

// Navigation tests
test('should navigate to the systems page', async ({ page }) => {
  await page.goto('/systems');
  // The new page should contain an h1 with "Elite Dangerous Pilots Network"
  await expect(page.locator('h1')).toContainText('Systems');
});
