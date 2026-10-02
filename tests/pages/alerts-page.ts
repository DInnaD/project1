import { type Page } from '@playwright/test';

export class AlertsPage {
  constructor(private readonly page: Page) {}

  async acceptSimpleAlert(): Promise<void> {
    await this.acceptDialog('#alertButton');
  }

  async acceptDelayedAlert(): Promise<void> {
    await this.acceptDialog('#timerAlertButton');
  }

  async acceptConfirmation(): Promise<void> {
    await this.acceptDialog('#confirmButton');
  }

  async dismissConfirmation(): Promise<void> {
    await this.dismissDialog('#confirmButton');
  }

  async submitPrompt(value: string): Promise<void> {
    await this.page.once('dialog', async (dialog) => {
      await dialog.accept(value);
    });
    await this.page.locator('#promtButton').click();
  }

  async dismissPrompt(): Promise<void> {
    await this.dismissDialog('#promtButton');
  }

  private async acceptDialog(buttonSelector: string): Promise<void> {
    await this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });
    await this.page.locator(buttonSelector).click();
  }

  private async dismissDialog(buttonSelector: string): Promise<void> {
    await this.page.once('dialog', async (dialog) => {
      await dialog.dismiss();
    });
    await this.page.locator(buttonSelector).click();
  }
}
