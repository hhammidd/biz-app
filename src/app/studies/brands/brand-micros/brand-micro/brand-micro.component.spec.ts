import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandMicroComponent } from './brand-micro.component';

describe('BrandMicroComponent', () => {
  let component: BrandMicroComponent;
  let fixture: ComponentFixture<BrandMicroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandMicroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandMicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
