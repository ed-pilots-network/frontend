import { test, expect } from '@playwright/test';

// Navigation tests
test('should navigate to the home page', async ({ page }) => {
  await page.goto('/');
  // The new page should contain an h1 with "Elite Dangerous Pilots Network"
  await expect(page.locator('h1')).toContainText(
    'Elite Dangerous Pilots Network',
  );
});
test('should navigate to the faq page', async ({ page }) => {
  await page.goto('/faq');
  await expect(page.locator('h1')).toContainText('FAQ');
});

// Index page tests
test('homepage role tabs behave correctly', async ({ page }) => {
  await page.goto('/');
  // Assert that the initial tab panel is visible
  await expect(page.getByRole('tabpanel', { name: 'Discover' })).toBeVisible();
  await expect(page.getByRole('tabpanel', { name: 'Trade' })).toBeHidden();
  await expect(page.getByRole('tabpanel', { name: 'Outfit' })).toBeHidden();

  // Select the 'Trade' tab
  await page.getByRole('tab', { name: 'Trade' }).click();

  // Assert that the 'Trade' tab panel is now visible, while others are hidden
  await expect(page.getByRole('tabpanel', { name: 'Discover' })).toBeHidden();
  await expect(page.getByRole('tabpanel', { name: 'Trade' })).toBeVisible();
  await expect(page.getByRole('tabpanel', { name: 'Outfit' })).toBeHidden();

  // Select the 'Outfit' tab
  await page.getByRole('tab', { name: 'Outfit' }).click();

  // Assert that the 'Outfit' tab panel is now visible, while others are hidden
  await expect(page.getByRole('tabpanel', { name: 'Discover' })).toBeHidden();
  await expect(page.getByRole('tabpanel', { name: 'Trade' })).toBeHidden();
  await expect(page.getByRole('tabpanel', { name: 'Outfit' })).toBeVisible();
});
