import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandMicrosComponent } from './brand-micros.component';

describe('BrandMicrosComponent', () => {
  let component: BrandMicrosComponent;
  let fixture: ComponentFixture<BrandMicrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandMicrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandMicrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
