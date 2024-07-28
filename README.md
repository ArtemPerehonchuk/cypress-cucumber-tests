# cypress-cucumber-tests

## Summary

This repository contains Cypress tests for the Telnyx website, utilizing Cucumber for Behavior-Driven Development (BDD). Test scenarios include end-to-end tests for different pages and functionalities.

## Requirements

- Node.js 
- npm 
- Cypress 
- Cucumber
- badeball/cypress-cucumber-preprocessor
- Mochawesome 

## Steps to Install

1. Clone the repository:
    ```bash
    git clone https://github.com/ArtemPerehonchuk/cypress-cucumber-tests.git
    cd demorealworld-cypress-tests
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Steps to Launch

1. Open the Cypress Test Runner, run:
    ```bash
    npm run cy:open
    ```

2. To run tests with different viewport sizes:

- **Large viewport size:**
    ```bash
    npm run cy:run:large
    ```

- **Medium viewport size:**
    ```bash
    npm run cy:run:medium
    ```

- **Small viewport size:**
    ```bash
    npm run cy:run:small
    ```

3. Run tests using Chrome as the default browser and create a Mochawesome report:
    ```bash
    npm run cy:run:chrome
    ```

## Steps to Create the Report

To generate a merged Mochawesome report:

1. Clean existing reports:
    ```bash
    rm -rf cypress/results/* || true
    ```

2. Run the tests:
    ```bash
    npm run cy:run:chrome
    ```

3. Merge the test reports:
    ```bash
    npm run merge:reports
    ```

4. Generate the HTML report:
    ```bash
    npm run generate:report
    ```

5. Open the HTML report:
    ```bash
    npm run open:report
    ```

The merged report will be available in the `cypress/results` directory and can be opened in the browser.

## Project Structure

- `cypress/`: Contains all Cypress tests and configurations.
- `cypress/pages/`: Contains Page Object Model files with locators and methods.
- `cypress/e2e/features`: Contains test scenarios in Gherkin format for testing using Cucumber are posted.
- `cypress/e2e/step_definitions`: Contains step definitions files for scripts written in Gherkin format.
- `.github/workflows/`: Contains GitHub Actions workflows for running tests.