import { test, expect } from '@playwright/test';

interface ScreenSize {
  width: number;
  height: number;
}

const screenSizes: ScreenSize[] = [
  { width: 480, height: 640 },
  { width: 768, height: 1024 },
  { width: 1280, height: 1024 },
  // Add more screen sizes as needed
];

const { RUN_SCREENSHOT_TEST } = process.env;
// Change to the project you want to take screenshots using - check playwright.config.ts
const projectName = 'Desktop-Chrome';

if (RUN_SCREENSHOT_TEST === 'true') {
  test.describe('Capture screenshots for different screen sizes', () => {
    test(projectName, async ({ page }, testInfo) => {
      const { name } = testInfo.project;
      if (name === projectName) {
        await page.goto('/');

        await expect(page.getByRole('tabpanel', { name: 'Discover' })).toBeVisible();

        // Capture screenshots for each screen size
        for (const size of screenSizes) {
          await page.setViewportSize(size);
          await page.screenshot({
            path: `./tests/playwright/screenshots/screenshot-${projectName}-${size.width}x${size.height}.png`,
          });

          console.log(`Screenshot captured for ${projectName} in ${size.width}x${size.height}`);
        }
    }
  });
});
}

