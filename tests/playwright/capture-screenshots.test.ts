import { test } from '@playwright/test';

interface ScreenSize {
  width: number;
  height: number;
}

const screenSizes: ScreenSize[] = [
  { width: 480, height: 720 },
  { width: 768, height: 1024 },
  { width: 1280, height: 1024 },
  { width: 1920, height: 1080 },
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
        // Capture screenshots for each screen size
        await screenSizes.reduce(async (promise, size) => {
          await promise;
          await page.setViewportSize(size);
          await page.screenshot({
            path: `./tests/playwright/screenshots/screenshot-${projectName}-${size.width}x${size.height}-dark.png`,
          });
          // Toggle color mode
          await page.click('button[aria-label="Toggle Dark Switch"]');
          await page.screenshot({
            path: `./tests/playwright/screenshots/screenshot-${projectName}-${size.width}x${size.height}-light.png`,
          });
          // Toggle color mode back to original
          await page.click('button[aria-label="Toggle Dark Switch"]');
          console.log(
            `Screenshots captured for ${projectName} in ${size.width}x${size.height}`,
          );
        }, Promise.resolve());
      }
    });
  });
}
