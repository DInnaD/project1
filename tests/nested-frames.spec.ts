import { expect, test } from './fixtures';
import { DemoQaNavigation } from './pages/demo-qa-navigation';
import { NestedFramesPage } from './pages/nested-frames-page';

test.describe('Nested Frames', () => {
  test.beforeEach(async ({ page }) => {
    await new DemoQaNavigation(page).openSection('Nested Frames');
  });

  test('reads content from the parent and child frames', async ({ page }) => {
    const frames = new NestedFramesPage(page);

    await expect(frames.parentFrame().locator('body')).toContainText('Parent frame');
    await expect(frames.childFrame().locator('body')).toContainText('Child Iframe');
  });
});
