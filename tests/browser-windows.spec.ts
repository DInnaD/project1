import { expect, test } from './fixtures';
import { BrowserWindowsPage } from './pages/browser-windows-page';
import { DemoQaNavigation } from './pages/demo-qa-navigation';

test.describe('Browser Windows', () => {
  test.beforeEach(async ({ page }) => {
    await new DemoQaNavigation(page).openSection('Browser Windows');
  });

  test('opens the sample page in a new tab', async ({ page }) => {
    const popup = await new BrowserWindowsPage(page).openNewTab();

    await expect(popup.getByRole('heading', { name: 'This is a sample page' })).toBeVisible();
    await popup.close();
  });

  test('opens the sample page in a new window', async ({ page }) => {
    const popup = await new BrowserWindowsPage(page).openNewWindow();

    await expect(popup.getByRole('heading', { name: 'This is a sample page' })).toBeVisible();
    await popup.close();
  });

  test('opens the message in a new window', async ({ page }) => {
    const popup = await new BrowserWindowsPage(page).openMessageWindow();

    await expect(popup.locator('body')).toContainText('Knowledge increases by sharing');
    await popup.close();
  });
});
