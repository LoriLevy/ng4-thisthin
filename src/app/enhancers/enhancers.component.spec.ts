import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { TitleComponent } from '../shared/title/title.component';
import { EnhancersComponent } from './enhancers.component';


describe('EnhancersComponent', () => {
  let component: EnhancersComponent;
  let fixture: ComponentFixture<EnhancersComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ EnhancersComponent, HeaderComponent, FooterComponent, TitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Enhancers Component', () => {
    expect(component).toBeTruthy();
  });
 
});
