import { expect, test } from '../fixtures';
import { AlertsPage } from '../pages/alerts-page';
import { DemoQaNavigation } from '../pages/demo-qa-navigation';

test.describe('Alerts negative and cancellation paths', () => {
  test.beforeEach(async ({ page }) => {
    await new DemoQaNavigation(page).openSection('Alerts');
  });

  test('cancels a confirmation and verifies the cancel result', async ({ page }) => {
    await new AlertsPage(page).dismissConfirmation();

    await expect(page.locator('#confirmResult')).toHaveText('You selected Cancel');
  });

  test('dismisses a prompt without submitting a value', async ({ page }) => {
    await new AlertsPage(page).dismissPrompt();

    await expect(page.locator('#promptResult')).toBeHidden();
  });
});
