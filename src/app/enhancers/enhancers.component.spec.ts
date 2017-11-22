import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancersComponent } from './enhancers.component';

describe('EnhancersComponent', () => {
  let component: EnhancersComponent;
  let fixture: ComponentFixture<EnhancersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnhancersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
