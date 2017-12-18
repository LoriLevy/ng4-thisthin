import { AppPage } from './app.po';
import { RecipesPage } from './recipes.po';
import { element, browser, by, Key } from 'protractor';
import { async } from '@angular/core/testing';

describe('This Thin Test Suite', () => {
    let appPage: AppPage;
    appPage = new AppPage();

/* Home Page Tests */
describe('This Thin Home Page', () => {
  
  beforeAll(() => {
    appPage.navigateToHome();  
  });

  it('should display "Home" as the Page Header', () => {
    expect(appPage.getPageHeadingH1()).toEqual('Do you want to be "This Thin"?');
  });

  it('should have a banner title of "Home" ', () => {
    expect(appPage.getBannerTitle()).toEqual('Home');

  });

  it('should have an active Header menu item for "HOME" ', () => {
    expect(appPage.getActiveHeaderMenuItem()).toEqual('HOME');
  });
  
  it('should have an active Footer menu item for "HOME" ', () => {
    expect(appPage.getActiveFooterMenuItem()).toEqual('HOME');
  });

  afterAll(() => {
    appPage.clickHomeLink();  
  });
});

/* Getting Started Page Tests */
describe('This Thin Getting Started Page', () => {

  beforeAll(() => {
    appPage.clickGetStarted();
  });

  it('should be on the Getting Started Page', () => {
    expect(browser.getCurrentUrl()).toContain("gettingstarted");
  })

  it('should display the "Playing the Fat Game" as the Page Header', () => {
    expect(appPage.getPageHeadingH2()).toEqual('Playing the Fat Game');
  });

  it('should display the "Getting Started" as the Page Banner Title', () => {
    expect(appPage.getBannerTitle()).toEqual('Getting Started');
  });

  it('should have an active Header menu item for "GETTING STARTED" ', () => {
    expect(appPage.getActiveHeaderMenuItem()).toEqual('GETTING STARTED');
  });

  it('should have an active Footer menu item for "GETTING STARTED" ', () => {
    expect(appPage.getActiveFooterMenuItem()).toEqual('GETTING STARTED');
  });

  afterAll(() => {
    appPage.clickHomeLink();  
  });
  
});

/* Recipes Page Tests */
describe('This Thin Recipes Page', () => {
  let recipesPage: RecipesPage;
  recipesPage = new RecipesPage();
  beforeAll(() => {
    appPage.clickRecipes();
  });

  it('should be on the Recipes Page', () => {
    expect(browser.getCurrentUrl()).toContain("recipes");
  })

  it('should display "Recipes" as the Page Header', () => {
    expect(appPage.getPageHeadingH1()).toEqual('Recipes');
  });

  it('should have a banner title of "Recipes" ', () => {
    expect(appPage.getBannerTitle()).toEqual('Recipes');
  });

  it('should have an active Header menu item for "RECIPES" ', () => {
    expect(appPage.getActiveHeaderMenuItem()).toEqual('RECIPES');
  });

  it('should have an active Footer menu item for "RECIPES" ', () => {
    expect(appPage.getActiveFooterMenuItem()).toEqual('RECIPES');
  });

  
  it('should have 6 menu filters for "RECIPES" ', ()  => {
    // console.log("Running the recipe filter count: ", appPage.countRecipeFilterButtons());
    //expect(appPage.countRecipeFilterButtons()).toBeGreaterThan(5);
    
    appPage.countRecipeFilterButtons().then(function(items) {
        console.log("#isotope-filters SIZE is: ", items.length);
        expect(items.length).toBe(6);
        //expect(items[0].getText()).toBe('First');
      });     
  });

  it('should have the first filter button text as "Show All" ', ()  => {
    appPage.countRecipeFilterButtons().then(function(items) {
        expect(items[0].getText()).toBe('Show All');
      });     
  });

  it('should have the second filter button text as "Breakfast" ', ()  => {
    appPage.countRecipeFilterButtons().then(function(items) {
        expect(items[1].getText()).toBe('Breakfast');
      });     
  });
  it('should have the third filter button text as "Lunch" ', ()  => {
    appPage.countRecipeFilterButtons().then(function(items) {
        expect(items[2].getText()).toBe('Lunch');
      });     
  });
  it('should have the fourth filter button text as "Dinner" ', ()  => {
    appPage.countRecipeFilterButtons().then(function(items) {
        expect(items[3].getText()).toBe('Dinner');
      });     
  });
  it('should have the fifth filter button text as "Dessert" ', ()  => {
    appPage.countRecipeFilterButtons().then(function(items) {
        expect(items[4].getText()).toBe('Dessert');
      });     
  });
  it('should have the sixth filter button text as "Sides" ', ()  => {
    appPage.countRecipeFilterButtons().then(function(items) {
        expect(items[5].getText()).toBe('Sides');
      });     
  });
  afterAll(() => {
    appPage.clickHomeLink();  
  });
});

/* Enhancers Page Tests */
describe('This Thin Getting Started Page', () => {

  beforeAll(() => {
    appPage.clickEnhancers();
  });

  it('should be on the Enhancers Page', () => {
    expect(browser.getCurrentUrl()).toContain("enhancers");
  })

  it('should display "Enhancers" as Page Header', () => {
    expect(appPage.getPageHeadingH1()).toEqual('Enhancers');
  });

  it('should have a banner title of "Enhancers" ', () => {
    expect(appPage.getBannerTitle()).toEqual('Enhancers');
  });

  it('should have an active Header menu item for "ENHANCERS" ', () => {
    expect(appPage.getActiveHeaderMenuItem()).toEqual('ENHANCERS');
  });

  it('should have an active Footer menu item for "ENHANCERS" ', () => {
    expect(appPage.getActiveFooterMenuItem()).toEqual('ENHANCERS');
  });

  afterAll(() => {
    appPage.clickHomeLink();  
  });
});

/* Baking Page Tests */
describe('This Thin Baking Page', () => {

  beforeAll(() => {
    appPage.clickBaking();
  });

  it('should be on the Baking Page', () => {
    expect(browser.getCurrentUrl()).toContain("baking");
  })

  it('should display "Baking" as Page Header', () => {
    expect(appPage.getPageHeadingH1()).toEqual('Low-Fat Baking');
  });

  it('should have a banner title of "Baking" ', () => {
    expect(appPage.getBannerTitle()).toEqual('Low-Fat Baking');
  });

  it('should have an active Header menu item for "LOW-FAT BAKING" ', () => {
    expect(appPage.getActiveHeaderMenuItem()).toEqual('LOW-FAT BAKING');
  });

  it('should have an active Footer menu item for "LOW-FAT BAKING" ', () => {
    expect(appPage.getActiveFooterMenuItem()).toEqual('LOW-FAT BAKING');
  });

  afterAll(() => {
    appPage.clickHomeLink();  
  });
});
});