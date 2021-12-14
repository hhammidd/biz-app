import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalepointsolComponent } from './salepointsol.component';

describe('SalepointsolComponent', () => {
  let component: SalepointsolComponent;
  let fixture: ComponentFixture<SalepointsolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalepointsolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalepointsolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
