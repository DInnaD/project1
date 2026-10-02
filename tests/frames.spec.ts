import { expect, test } from './fixtures';
import { DemoQaNavigation } from './pages/demo-qa-navigation';
import { FramesPage } from './pages/frames-page';

test.describe('Frames', () => {
  test.beforeEach(async ({ page }) => {
    await new DemoQaNavigation(page).openSection('Frames');
  });

  test('reads content from both frames', async ({ page }) => {
    const frames = new FramesPage(page);

    await expect(frames.firstFrame()).toContainText('This is a sample page');
    await expect(frames.secondFrame()).toContainText('This is a sample page');
  });
});
