import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule, Routes, ActivatedRoute, RouterLinkWithHref } from '@angular/router';
import { Location } from '@angular/common';
import { BakingComponent } from './baking.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { TitleComponent } from '../shared/title/title.component';
import { click } from '../../test';
import { AppComponent } from '../app.component';
import { RoutesRecognized } from '@angular/router/src/events';
import { AppModule } from "../app.module";

const routes: Routes =  [
  { path: 'baking', component: BakingComponent, data:{ "pageTitle": "Low-Fat Baking"}}, 
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

describe('BakingComponent', () => {
  let component: BakingComponent;
  let fixture: ComponentFixture<BakingComponent>;
  let pageTitle, element, de, titleFixture, titleComponent;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(routes)], 
        declarations: [ AppComponent, BakingComponent, HeaderComponent, FooterComponent, TitleComponent ],  
    })
    .compileComponents();
    
  }));
 

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BakingComponent); //We need this reference to the App Component just for the router-outlet
    element = fixture.nativeElement;      // to access DOM element
    
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  }));

  //Create the Baking Component
  it('should create the BakingComponent', () => {
    expect(component).toBeTruthy();
  });


});



