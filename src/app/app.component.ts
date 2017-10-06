import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
  <app-header></app-header>
  
  <app-footer></app-footer>
  `
})
export class AppComponent {
  title: string = 'ThisThin';
}
