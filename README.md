# Distilled-Project
# Pre-Requisites:
1. Install Visual Studio Code: Download and Install Visual Studio Code(VSCode).
2. Install NodeJS: Download and Install Node JS.
3. Clone this repository in local.
4. Enter the below command to start the Playwright installation. It creates Package.json, Installs npm library.
       npm init playwright@latest
5. Using the below command, you can install all different browsers in Playwright. 
       npx playwright install


# Folder Structure :
page_objects : Contains all the locators of the Home Page and Properties Page
page_actions : Contains the actions of all locators completing a test case scenario 
tests folder: This folder contains actual test scripts. It has landing-page.spec.ts file, where I have written the code playwright.config.ts: This is the global configuration file for the Playwright, which you can configure with available options.

# Test Execution

You can run the test by single command in VS Code terminal. Playwright runs in headless mode by default, so we specify the –headed to run on headed mode.
       npx playwright test landing-page.spec.ts --headed




