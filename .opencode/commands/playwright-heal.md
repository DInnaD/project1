---
description: Diagnose and fix failing Playwright tests
agent: playwright-test-healer
---

Diagnose and repair the failing Playwright test or tests identified by the user.

Test path, failure details, and any scope constraints: $ARGUMENTS

Follow the healer agent workflow: run the relevant tests, debug failures, inspect the browser state and diagnostics, make focused fixes, and rerun after each fix until passing or until an external blocker is established. Explain the cause and changes. If no target or scope can be inferred from the request and repository, ask for the missing detail.
