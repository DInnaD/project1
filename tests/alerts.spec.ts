import { expect, test } from './fixtures';
import { AlertsPage } from './pages/alerts-page';
import { DemoQaNavigation } from './pages/demo-qa-navigation';

test.describe('Alerts', () => {
  test.beforeEach(async ({ page }) => {
    await new DemoQaNavigation(page).openSection('Alerts');
  });

  test('accepts a standard alert', async ({ page }) => {
    await new AlertsPage(page).acceptSimpleAlert();

    await expect(page.locator('#alertButton')).toBeVisible();
  });

  test('accepts the delayed alert', async ({ page }) => {
    await new AlertsPage(page).acceptDelayedAlert();

    await expect(page.locator('#timerAlertButton')).toBeVisible();
  });

  test('accepts a confirmation and verifies the result', async ({ page }) => {
    await new AlertsPage(page).acceptConfirmation();

    await expect(page.locator('#confirmResult')).toHaveText('You selected Ok');
  });

  test('submits a prompt value and verifies the result', async ({ page }) => {
    await new AlertsPage(page).submitPrompt('Playwright');

    await expect(page.locator('#promptResult')).toContainText('Playwright');
  });
});
