import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { GettingstartedComponent } from './gettingstarted/gettingstarted.component';
import { bootstrap } from 'bootstrap';
import { TitleComponent } from './shared/title/title.component';
import { NotfoundComponent } from './notfound/notfound.component';

//import { routes } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    GettingstartedComponent,
    TitleComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule, RouterModule,
    RouterModule.forRoot ([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'gettingstarted', component: GettingstartedComponent },
      { path: 'meals', component: NotfoundComponent },
      { path: 'enhancers', component: NotfoundComponent },
      { path: 'lowfatbaking', component: NotfoundComponent }
    ])
//    routes
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
