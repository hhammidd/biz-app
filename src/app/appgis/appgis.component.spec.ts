import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppgisComponent } from './appgis.component';

describe('AppgisComponent', () => {
  let component: AppgisComponent;
  let fixture: ComponentFixture<AppgisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppgisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppgisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
