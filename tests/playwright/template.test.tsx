import { test, expect } from '@playwright/test';

test('should navigate to the template page', async ({ page }) => {
  await page.goto('/template');
  await expect(page.locator('h1')).toContainText('Heading goes here');
});

test('should render server props', async ({ page }) => {
  await page.goto('/template');
  const biowasteListItem = page.getByRole('listitem').nth(0);

  await expect(biowasteListItem).toBeVisible();
});
