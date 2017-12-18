import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToHome() {
    return browser.get('/');
  }

  clickHomeLink() {
    browser.findElement(by.css('.nav.sf-menu a[routerlink="home"]')).click();
  }

  clickGetStarted() {
   browser.findElement(by.css('.nav.sf-menu a[routerlink="/gettingstarted"]')).click();
  }

  clickRecipes() {
    browser.findElement(by.css('.nav.sf-menu a[routerlink="/recipes"]')).click();
  
  }
  clickEnhancers() {
    browser.findElement(by.css('.nav.sf-menu a[routerlink="/enhancers"]')).click();
  }

  clickBaking() {
    browser.findElement(by.css('.nav.sf-menu a[routerlink="/baking"]')).click();
  }

  getPageHeadingH1() {
    return element(by.css('h1')).getText();
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

  countRecipeFilterButtons() {
   let filterCount = 0;
    return element.all(by.css('ul#isotope-filters li a'))
    // .then(function(items) {
    //   console.log("#isotope-filters SIZE is: ", items.length);
    //   filterCount = items.length;
    //   //expect(items.length).toBe(6);
    //   //expect(items[0].getText()).toBe('First');
    //   return filterCount;  
    // });     
  }
}


