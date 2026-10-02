# Alerts: Negative and Cancellation Scenarios

**Page:** https://demoqa.com/alerts  
**Page Object:** `tests/pages/alerts-page.ts`  
**Shared navigation:** `tests/pages/demo-qa-navigation.ts`  
**Spec:** `tests/negative/alerts-negative.spec.ts`

These scenarios start from a fresh page and exercise the supported cancellation paths. They are kept separate from the positive scenarios in `demoqa-alerts.md` and `tests/alerts.spec.ts`.

## Cancel the confirmation

1. Navigate to **Alerts**.
2. Select the confirmation button and dismiss the dialog.
3. Verify the page displays **You selected Cancel**.

## Dismiss the prompt

1. Navigate to **Alerts**.
2. Select the prompt button and dismiss the dialog without entering a value.
3. Verify no prompt result is displayed.

## Acceptance

Both cancellation paths complete without submitting a positive confirmation or prompt value, and the expected result state is verified.
