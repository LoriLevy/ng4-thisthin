import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { TitleComponent } from '../shared/title/title.component';
import { RecipesComponent } from './recipes.component';
import { Recipes } from './recipe.data';
import { RecipeComponent } from './recipe.component';
import { PipeTransform, Pipe } from '@angular/core';
import { RecipeFilterPipe } from './recipe-filter.Pipe'

describe('RecipesComponent', () => {
  let recipesComponent: RecipesComponent;
  let recipesFixture: ComponentFixture<RecipesComponent>;
  let recipeComponent: RecipeComponent;
  let recipeFixture: ComponentFixture<RecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ RecipesComponent, RecipeComponent, RecipeFilterPipe, HeaderComponent, FooterComponent, TitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    recipesFixture = TestBed.createComponent(RecipesComponent);
    recipesComponent = recipesFixture.componentInstance;
    recipeFixture = TestBed.createComponent(RecipeComponent);
    recipeComponent = recipeFixture.componentInstance;
    
    recipesFixture.detectChanges();
  });

  it('should create the Recipes Parent Component', () => {
    expect(recipesComponent).toBeTruthy();
  });
  it('should create the Recipe Component', () => {
    expect(recipeComponent).toBeTruthy();
  });
});