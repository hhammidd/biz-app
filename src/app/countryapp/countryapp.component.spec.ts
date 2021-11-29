import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryappComponent } from './countryapp.component';

describe('CountryappComponent', () => {
  let component: CountryappComponent;
  let fixture: ComponentFixture<CountryappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
