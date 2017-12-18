import { browser, by, element } from 'protractor';

export class RecipesPage {
  getFilterMenuItems() {
    // let recipeFilters: 
    // [
    return browser.findElement(by.css('ul#isotope-filters li a')).getText();
    // ]
  }

  getPageHeadingH2() {

    return element(by.css('h2')).getText();
  }

  getBannerTitle() {
    return element(by.css('.page_title_px')).getText();
  }

  getActiveHeaderMenuItem() {
    return element(by.css('.nav.sf-menu li.active a')).getText();
  }

  getActiveFooterMenuItem() {
    return element(by.css('.menu_bot li.active a')).getText();
  }
}


