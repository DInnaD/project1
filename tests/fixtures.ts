import { expect, test as base } from '@playwright/test';

type NetworkFixtures = {
  networkTrafficLogger: void;
};

export const test = base.extend<NetworkFixtures>({
  networkTrafficLogger: [
    async ({ page }, use, testInfo) => {
      const context = page.context();

      await page.route('**/*', async (route) => {
        const request = route.request();
        console.log(`[network][${testInfo.title}] INTERCEPT ${request.method()} ${request.url()}`);
        await route.continue();
      });

      context.on('request', (request) => {
        console.log(`[network][${testInfo.title}] REQUEST ${request.method()} ${request.url()}`);
      });

      context.on('response', (response) => {
        console.log(`[network][${testInfo.title}] RESPONSE ${response.status()} ${response.url()}`);
      });

      await use();
    },
    { auto: true },
  ],
});

export { expect };
