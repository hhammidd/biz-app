import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceInfoListComponent } from './price-info-list.component';

describe('PriceInfoListComponent', () => {
  let component: PriceInfoListComponent;
  let fixture: ComponentFixture<PriceInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
