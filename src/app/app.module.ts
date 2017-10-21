import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GettingstartedComponent } from './gettingstarted/gettingstarted.component';
import { bootstrap } from 'bootstrap';
import { TitleComponent } from './shared/title/title.component';

//import { routes } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    GettingstartedComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule, RouterModule,
    RouterModule.forRoot ([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: [{title: "Home"} ]},
      { path: 'gettingstarted', component: GettingstartedComponent, data: [{title: "Getting Started"} ]},
      { path: '**', component: HomeComponent } //wildcard 
    ])
//    routes
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
