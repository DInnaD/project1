import { type Locator, type Page } from '@playwright/test';

export class ModalDialogsPage {
  constructor(private readonly page: Page) {}

  async openSmallModal(): Promise<Locator> {
    await this.page.locator('#showSmallModal').click();
    return this.page.locator('.modal-dialog');
  }

  async closeSmallModal(): Promise<void> {
    await this.page.locator('#closeSmallModal').click();
  }

  async openLargeModal(): Promise<Locator> {
    await this.page.locator('#showLargeModal').click();
    return this.page.locator('.modal-dialog');
  }

  async closeLargeModal(): Promise<void> {
    await this.page.locator('#closeLargeModal').click();
  }
}
