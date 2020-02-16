import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandCalculationsComponent } from './brand-calculations.component';

describe('BrandCalculationsComponent', () => {
  let component: BrandCalculationsComponent;
  let fixture: ComponentFixture<BrandCalculationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandCalculationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandCalculationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
