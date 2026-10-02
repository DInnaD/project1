# Modal Dialogs: Positive Scenarios

**Page:** https://demoqa.com/modal-dialogs  
**Page Object:** `tests/pages/modal-dialogs-page.ts`  
**Shared navigation:** `tests/pages/demo-qa-navigation.ts`  
**Spec:** `tests/modal-dialogs.spec.ts`

Each scenario starts from a fresh page. Navigate from the Alerts, Frame & Windows landing page by selecting **Modal Dialogs**.

## Open and close the small modal

1. Open **Small modal**.
2. Verify its content includes **This is a small modal**.
3. Close the modal and verify it is hidden.

## Open and close the large modal

1. Open **Large modal**.
2. Verify the modal content is visible.
3. Close the modal and verify it is hidden.

## Acceptance

Both modal types open with visible content and close successfully after verification.
