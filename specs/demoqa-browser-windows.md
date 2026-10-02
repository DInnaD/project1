# Browser Windows: Positive Scenarios

**Page:** https://demoqa.com/browser-windows  
**Page Object:** `tests/pages/browser-windows-page.ts`  
**Shared navigation:** `tests/pages/demo-qa-navigation.ts`  
**Spec:** `tests/browser-windows.spec.ts`

Each scenario starts from a fresh page. Navigate from the Alerts, Frame & Windows landing page by selecting **Browser Windows**.

## Open a new tab

1. Select **New Tab**.
2. Verify the new tab displays the heading **This is a sample page**.
3. Close the popup.

## Open a new window

1. Select **New Window**.
2. Verify the new window displays the heading **This is a sample page**.
3. Close the popup.

## Open the message window

1. Select **New Window Message**.
2. Verify the new window displays a sharing message beginning **Knowledge increases by sharing**.
3. Close the popup.

## Acceptance

All three popup actions open the expected content in a separate page, and each popup is closed after verification.
