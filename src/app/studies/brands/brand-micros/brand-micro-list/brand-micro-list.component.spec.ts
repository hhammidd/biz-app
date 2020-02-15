import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandMicroListComponent } from './brand-micro-list.component';

describe('BrandMicroListComponent', () => {
  let component: BrandMicroListComponent;
  let fixture: ComponentFixture<BrandMicroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandMicroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandMicroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
