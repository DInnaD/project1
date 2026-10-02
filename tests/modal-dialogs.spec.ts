import { expect, test } from './fixtures';
import { DemoQaNavigation } from './pages/demo-qa-navigation';
import { ModalDialogsPage } from './pages/modal-dialogs-page';

test.describe('Modal Dialogs', () => {
  test.beforeEach(async ({ page }) => {
    await new DemoQaNavigation(page).openSection('Modal Dialogs');
  });

  test('opens, verifies, and closes the small modal', async ({ page }) => {
    const modals = new ModalDialogsPage(page);
    const modal = await modals.openSmallModal();

    await expect(modal).toBeVisible();
    await expect(modal.locator('.modal-body')).toContainText('This is a small modal');
    await modals.closeSmallModal();
    await expect(modal).toBeHidden();
  });

  test('opens, verifies, and closes the large modal', async ({ page }) => {
    const modals = new ModalDialogsPage(page);
    const modal = await modals.openLargeModal();

    await expect(modal).toBeVisible();
    await expect(modal.locator('.modal-body')).not.toBeEmpty();
    await modals.closeLargeModal();
    await expect(modal).toBeHidden();
  });
});
