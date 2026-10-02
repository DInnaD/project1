# Playwright tests

Install dependencies and the Chromium browser once:

```sh
npm install
npx playwright install chromium
```

Run the suite with `npm test`. Use `npm run test:headed` to see the browser.

The positive specs are split by DemoQA page; each imports its matching Page Object from `tests/pages/`. Alert cancellation cases live separately in `tests/negative/` and also use the Alerts Page Object. Scenario documents are indexed in `specs/demoqa-alert-windows-plan.md`.

GitHub Actions runs the suite on every push and pull request. Each workflow run uploads the HTML report and test traces as the `playwright-report` artifact.

The shared Playwright fixture logs browser-context network traffic to the test output: requests include the HTTP method and URL; responses include the status and URL. This also captures traffic from popup pages.
