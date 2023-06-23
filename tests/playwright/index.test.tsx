import { test, expect } from '@playwright/test';

test('should navigate to the home page', async ({ page }) => {
  await page.goto('/');
  // The new page should contain an h1 with "Elite Dangerous Pilots Network"
  await expect(page.locator('h1')).toContainText(
    'Elite Dangerous Pilots Network',
  );

  // Page should include a tab navigation with the following tabs:
  await expect(page.getByRole('tab', { name: 'Discover' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Systems' })).toBeVisible();
});

test('homepage Trade tab should update cards', async ({ page }) => {
  await page.goto('/');

  // Page should display initial cards to include:
  await expect(page.getByRole('link', { name: 'Systems' })).toBeVisible();

  // Page should NOT display hidden cards to include:
  await expect(
    page.getByRole('link', { name: 'Single Trade Route' }),
  ).toBeHidden();

  // Click on the "Trade" tab
  await page.getByRole('tab', { name: 'Trade' }).click();

  // Page should display new cards to include:
  await expect(
    page.getByRole('link', { name: 'Single Trade Route' }),
  ).toBeVisible();

  // Page should NOT display hidden cards to include:
  await expect(page.getByRole('link', { name: 'Systems' })).toBeHidden();
});

test('homepage Outfit tab should update cards', async ({ page }) => {
  await page.goto('/');

  // Page should display initial cards to include:
  await expect(page.getByRole('link', { name: 'Systems' })).toBeVisible();

  // Page should NOT display hidden cards to include:
  await expect(page.getByRole('link', { name: 'Shipyard' })).toBeHidden();

  // Click on the "Outfit" tab
  await page.getByRole('tab', { name: 'Outfit' }).click();

  // Page should display new cards to include:
  await expect(page.getByRole('link', { name: 'Shipyard' })).toBeVisible();

  // Page should NOT display hidden cards to include:
  await expect(page.getByRole('link', { name: 'Systems' })).toBeHidden();
});

test('should navigate to the faq page', async ({ page }) => {
  await page.goto('/faq');
  await expect(page.locator('h2')).toContainText('FAQ');
});
