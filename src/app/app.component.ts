import { Component } from '@angular/core';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { TitleComponent } from './shared/title/title.component';
import { RecipesComponent } from './recipes/recipes.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ ]
})

export class AppComponent {
   pageTitle: string;
}
