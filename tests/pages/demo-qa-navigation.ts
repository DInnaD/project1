import { expect, type Page } from '@playwright/test';

export type DemoQaSection =
  | 'Browser Windows'
  | 'Alerts'
  | 'Frames'
  | 'Nested Frames'
  | 'Modal Dialogs';

export class DemoQaNavigation {
  constructor(private readonly page: Page) {}

  async openSection(section: DemoQaSection): Promise<void> {
    await this.page.goto('/alertsWindows');
    await this.page.getByRole('link', { name: section, exact: true }).click();
    await expect(this.page.getByRole('heading', { name: section, exact: true })).toBeVisible();
  }
}
