import { type Page } from '@playwright/test';

export class NestedFramesPage {
  constructor(private readonly page: Page) {}

  parentFrame() {
    return this.page.frameLocator('#frame1');
  }

  childFrame() {
    return this.parentFrame().frameLocator('iframe');
  }
}
