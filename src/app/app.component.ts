import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TitleComponent } from './shared/title/title.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  pageTitle: string = 'Home';
  fromFooter(pageTitle: string) {
    this.pageTitle = pageTitle;
  }
}
