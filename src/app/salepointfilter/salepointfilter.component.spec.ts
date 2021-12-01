import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalepointfilterComponent } from './salepointfilter.component';

describe('SalepointfilterComponent', () => {
  let component: SalepointfilterComponent;
  let fixture: ComponentFixture<SalepointfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalepointfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalepointfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
