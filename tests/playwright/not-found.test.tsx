import { test, expect } from '@playwright/test';

test('should navigate to the custom 404 page on missing route', async ({
  page,
}) => {
  await page.goto('/i-dont-exist');
  await expect(page.locator('h1')).toContainText('404 - Page Not Found');
});

test('should navigate to the custom 404 page on nested missing routes', async ({
  page,
}) => {
  await page.goto('/nested/i-dont-exist');
  await expect(page.locator('h1')).toContainText('404 - Page Not Found');
});
