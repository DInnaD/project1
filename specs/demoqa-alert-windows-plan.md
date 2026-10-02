# DemoQA Positive Test Plans

**Application:** https://demoqa.com/alertsWindows  
**Automation:** Playwright Test with TypeScript and Page Objects  
**Starting state:** A fresh Playwright page and browser context for each scenario.

Each page has its own scenario document. The test implementation is grouped by the same page boundaries and uses one feature Page Object per page, plus a shared navigation Page Object.

| Page | Scenario plan | Page Object | Playwright spec |
| --- | --- | --- | --- |
| Browser Windows | [demoqa-browser-windows.md](demoqa-browser-windows.md) | `BrowserWindowsPage` | `tests/browser-windows.spec.ts` |
| Alerts positive | [demoqa-alerts.md](demoqa-alerts.md) | `AlertsPage` | `tests/alerts.spec.ts` |
| Alerts negative | [demoqa-alerts-negative.md](demoqa-alerts-negative.md) | `AlertsPage` | `tests/negative/alerts-negative.spec.ts` |
| Frames | [demoqa-frames.md](demoqa-frames.md) | `FramesPage` | `tests/frames.spec.ts` |
| Nested Frames | [demoqa-nested-frames.md](demoqa-nested-frames.md) | `NestedFramesPage` | `tests/nested-frames.spec.ts` |
| Modal Dialogs | [demoqa-modal-dialogs.md](demoqa-modal-dialogs.md) | `ModalDialogsPage` | `tests/modal-dialogs.spec.ts` |

The page-specific plans cover successful interactions; alert cancellation paths are documented separately. Invalid input and error handling remain out of scope. See [tests/README.md](../tests/README.md) for installation and run commands.
