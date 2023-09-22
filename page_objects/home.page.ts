import { expect, Locator, Page } from '@playwright/test';
export class DraftHomePage {

readonly page: Page;
readonly searchBox: Locator;
readonly listItems: Locator;
readonly cityName: Locator;
readonly filters:Locator;
readonly keyWordSearch: Locator;
readonly showResultsButton: Locator;
readonly resultValue: Locator;

//This file contains the locators

constructor(page: Page) {
this.page = page;
this.searchBox = page.locator("//div[@class='HomepageSearchBox__AutosizeInputStyled-sc-9ochkc-1 bTituM']/input[@id='search-box-input']");
this.listItems = page.locator("//ul[@data-testid='menu']//li[@data-testid='item']");
this.cityName = page.locator("(//ul[@data-testid='menu']//li[@data-testid='item'])[1]");
this.filters = page.locator("//button[@data-testid='open-filters-modal']");
this.keyWordSearch = page.locator("//div/input[@id='keywordtermsModal']");
this.showResultsButton = page.locator("//div/button[@data-testid='filters-modal-show-results-button']");
this.resultValue = page.locator("//div/h1[@data-testid='search-h1']");
}
}