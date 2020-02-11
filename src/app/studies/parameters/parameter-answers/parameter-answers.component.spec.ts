import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterAnswersComponent } from './parameter-answers.component';

describe('ParameterAnswersComponent', () => {
  let component: ParameterAnswersComponent;
  let fixture: ComponentFixture<ParameterAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
