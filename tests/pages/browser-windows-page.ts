import { type Page } from '@playwright/test';

export class BrowserWindowsPage {
  constructor(private readonly page: Page) {}

  openNewTab() {
    return this.openPopup('#tabButton');
  }

  openNewWindow() {
    return this.openPopup('#windowButton');
  }

  openMessageWindow() {
    return this.openPopup('#messageWindowButton');
  }

  private async openPopup(buttonSelector: string) {
    const popupPromise = this.page.context().waitForEvent('page');
    await this.page.locator(buttonSelector).click();
    const popup = await popupPromise;
    await popup.waitForLoadState();
    return popup;
  }
}
