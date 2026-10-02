# Alerts: Positive Scenarios

**Page:** https://demoqa.com/alerts  
**Page Object:** `tests/pages/alerts-page.ts`  
**Shared navigation:** `tests/pages/demo-qa-navigation.ts`  
**Spec:** `tests/alerts.spec.ts`

Each scenario starts from a fresh page. Navigate from the Alerts, Frame & Windows landing page by selecting **Alerts**.

## Accept the standard alert

1. Select the first **Click me** button.
2. Accept the alert.
3. Verify the Alerts page remains available after the dialog closes.

## Accept the delayed alert

1. Select the delayed alert button.
2. Wait for and accept the alert.
3. Verify the Alerts page remains available after the dialog closes.

## Accept the confirmation

1. Select the confirmation button.
2. Accept the dialog.
3. Verify the result says **You selected Ok**.

## Submit the prompt

1. Select the prompt button.
2. Enter `Playwright` and accept the prompt.
3. Verify the result contains `Playwright`.

## Acceptance

All four dialogs are handled with positive input and their resulting page state is verified.
