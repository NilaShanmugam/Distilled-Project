import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({page}) => {

  await page.goto("https://www.daft.ie/");
  await page.click('text=Accept All');

})

test.describe('Verify Search & Filter functionality', ()=>{


  test('Validating whether filter is applied Properly and the result is populated as expected', async({page, browser, context})=>{


     /* Entering Dublin ,selecting the value from the list drop down and loading to Property for sales Page*/

    await page.waitForSelector("//div[@class='HomepageSearchBox__AutosizeInputStyled-sc-9ochkc-1 bTituM']/input[@id='search-box-input']");

    await page.locator("//div[@class='HomepageSearchBox__AutosizeInputStyled-sc-9ochkc-1 bTituM']/input[@id='search-box-input']").fill('Dublin');

    await page.waitForSelector("//ul[@data-testid='menu']//li[@data-testid='item']");

    await page.locator("(//ul[@data-testid='menu']//li[@data-testid='item'])[1]").click();

    await page.waitForSelector("//button[@data-testid='open-filters-modal']");

    await page.locator("//button[@data-testid='open-filters-modal']").click();

    /* Scrolling down to the Keyword Section and filling in the value Garage */

    await page.mouse.down();

    await page.waitForSelector("//div/input[@id='keywordtermsModal']");

    await page.locator("//div/input[@id='keywordtermsModal']").fill("garage");

    await page.waitForSelector("//div/button[@data-testid='filters-modal-show-results-button']");

    await page.locator("//div/button[@data-testid='filters-modal-show-results-button']").click();

    /* Waiting for the page to load and to display the filtered value*/

    await page.waitForTimeout(2000);

    await page.waitForSelector("//div/h1[@data-testid='search-h1']");

     /* Capturing text displayed in show result button and search result heading for validation purpose */

    const actualText = await page.locator("//div/h1[@data-testid='search-h1']").allTextContents();

    await page.waitForSelector("//button[@data-testid='open-filters-modal']");

    await page.locator("//button[@data-testid='open-filters-modal']").click();
     
    const expectedText = await page.locator("//div/button[@data-testid='filters-modal-show-results-button']").allTextContents();
    
    /* Comparing the text shown in button and the heading to ensure the filtered number is displayed properly */

    var splitOnSpace = expectedText.toString();

    var newarr = splitOnSpace.split(" ");

    var resultNumber = newarr[2];

    var actualString = actualText.toString();

    expect(actualString).toContain(resultNumber);

  })

})