import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldComponentComponent } from './field-component.component';

describe('FieldComponentComponent', () => {
  let component: FieldComponentComponent;
  let fixture: ComponentFixture<FieldComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
