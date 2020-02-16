import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandCalculationComponent } from './brand-calculation.component';

describe('BrandCalculationComponent', () => {
  let component: BrandCalculationComponent;
  let fixture: ComponentFixture<BrandCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
