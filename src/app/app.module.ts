import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { GettingstartedComponent } from './gettingstarted/gettingstarted.component';
import { bootstrap } from 'bootstrap';
import { TitleComponent } from './shared/title/title.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RecipeComponent } from './shared/recipe/recipe.component';
import { RecipesComponent } from './shared/recipes/recipes.component';
import { RecipeFilterPipe } from "./shared/recipes/recipe-filter.Pipe";
import { RecipeService } from './shared/recipes/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    GettingstartedComponent,
    TitleComponent,
    NotfoundComponent,
    RecipeComponent,
    RecipesComponent,
    RecipeFilterPipe
  ],
  imports: [
    BrowserModule, RouterModule,
    HttpModule,
    RouterModule.forRoot ([
      { path: 'home', component: HomeComponent, data:{ "pageTitle": "Home"} },
      { path: 'gettingstarted', component: GettingstartedComponent, data:{ "pageTitle": "Getting Started"} },
      { path: 'meals', component: RecipesComponent, data:{ "pageTitle": "Meals and Recipes"} },
      { path: 'enhancers', component: NotfoundComponent, data:{ "pageTitle": "Enhancers"}  },
      { path: 'baking', component: NotfoundComponent, data:{ "pageTitle": "Low-Fat Baking"}  },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ])
   
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
