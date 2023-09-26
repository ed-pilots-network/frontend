import { test, expect } from '@playwright/test';

test('client rendering errors should get caught and gracefully render error', async ({
  page,
}) => {
  await page.goto('/playground/client-error');
  await expect(page.locator('h1')).toContainText('Something went wrong!');
  await expect(page.locator('samp')).toContainText(
    'This is a simulated client rendering error',
  );
});

test('server rendering errors should get caught and gracefully render error', async ({
  page,
}) => {
  await page.goto('/playground/server-error');
  await expect(page.locator('h1')).toContainText('Something went wrong!');
  // Error messages for server rendering get replaced for security during builds
  await expect(page.locator('samp')).toContainText(
    'An error occurred in the Server Components render.',
  );
});
