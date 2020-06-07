import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceinfosComponent } from './priceinfos.component';

describe('PriceinfosComponent', () => {
  let component: PriceinfosComponent;
  let fixture: ComponentFixture<PriceinfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceinfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
