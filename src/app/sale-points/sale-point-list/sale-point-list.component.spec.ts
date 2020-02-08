import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePointListComponent } from './sale-point-list.component';

describe('SalePointListComponent', () => {
  let component: SalePointListComponent;
  let fixture: ComponentFixture<SalePointListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalePointListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalePointListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
