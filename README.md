# Distilled-Project using PlayWright Framework with TypeScript

# Pre-Requisites: 

1. Install Visual Studio Code: Download and Install Visual Studio Code(VSCode).
2. Install NodeJS: Download and Install Node JS
3. Clone this repository in local
4. Enter the below command to start the Playwright installation
     npm init playwright@latest
5. It creates Package.json, Installs npm library
6.  Using the below command, you can install all different browsers in Playwright.
     npx playwright install



# Folder Structure :
 tests folder: This folder contains actual test scripts. It has landing-page.spec.ts file, where I have written the code
 playwright.config.ts: This is the global configuration file for the Playwright, which you can configure with available options.


To Run the tests :

You can run the test by single command in VS Code terminal. Playwright runs in headless mode by default, so we specify the –headed to run on headed mode.

    npx playwright test landing-page.spec.ts --headed


Code Explanation & Result :

You can visualise that "Dublin" is entered in Search Box present under Buy Section and the Page is loaded
Filters will be clicked and scrolled down to the "Keyword / Address Search" field 
Now "garage" will be entered in the section and Show results button will be clicked
I have introduced wait time of 2 secs for the results to get updated
I have asserted the results by comparing the text shown in Filters Section (Count shown in Show results button) and the count text shown in heading "Properties for Sale in Dublin City" 
If both the count is matching the result will be passed
Now chrome will be closed





