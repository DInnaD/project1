---
description: Generate a Playwright test from a saved plan
agent: playwright-test-generator
---

Generate a Playwright test for the requested scenario using the existing test plan and project conventions.

Scenario, plan path, and any other details: $ARGUMENTS

Follow the generator agent workflow: locate and read the plan, set up the page, execute the scenario steps with the browser tools, read the generator log, and immediately write the resulting single-test source file with `generator_write_test`. If the scenario or plan cannot be identified from the request and repository, ask for the missing detail.
