import { type Page } from '@playwright/test';

export class FramesPage {
  constructor(private readonly page: Page) {}

  firstFrame() {
    return this.page.frameLocator('#frame1').locator('body');
  }

  secondFrame() {
    return this.page.frameLocator('#frame2').locator('body');
  }
}
