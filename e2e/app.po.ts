import { browser, by, element } from 'protractor';
// import { HomePage } from './pages/home.page';
// import { BakingPage } from './pages/baking.page';
// import { GettingStartedPage } from './pages/gettingstarted.page';
// import { EnhancersPage } from './pages/enhancers.page';
// import { RecipesPage } from './pages/recipes.page';

export class AppPage {
  navigateToHome() {
    return browser.get('/');
  }

  clickHomeLink() {
    browser.findElement(by.css('.nav.sf-menu a[routerlink="home"]')).click();
  }

  navigateToGetStarted() {
   browser.findElement(by.css('.nav.sf-menu a[routerlink="/gettingstarted"]')).click();
  }

  navigateToRecipes() {
    browser.findElement(by.css('.nav.sf-menu a[routerlink="/recipes"]')).click();
  
  }
  navigateToEnhancers() {
    browser.findElement(by.css('.nav.sf-menu a[routerlink="/enhancers"]')).click();
  }

  navigateToBaking() {
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
}


