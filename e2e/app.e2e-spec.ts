import { AppPage } from './app.po';
import { element, browser, by, Key } from 'protractor';

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
  afterAll(() => {
    appPage.clickHomeLink();  
  });
});

/* Getting Started Page Tests */
describe('This Thin Getting Started Page', () => {

  beforeAll(() => {
    appPage.navigateToGetStarted();
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

  afterAll(() => {
    appPage.clickHomeLink();  
  });
});

/* Recipes Page Tests */
describe('This Thin Recipes Page', () => {

  beforeAll(() => {
    appPage.navigateToRecipes();
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
  afterAll(() => {
    appPage.clickHomeLink();  
  });
});

/* Enhancers Page Tests */
describe('This Thin Getting Started Page', () => {

  beforeAll(() => {
    appPage.navigateToEnhancers();
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
  afterAll(() => {
    appPage.clickHomeLink();  
  });
});

/* Baking Page Tests */
describe('This Thin Baking Page', () => {

  beforeAll(() => {
    appPage.navigateToBaking();
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
  afterAll(() => {
    appPage.clickHomeLink();  
  });
});
});