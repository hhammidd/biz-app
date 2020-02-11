import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterQuestionComponent } from './parameter-question.component';

describe('ParameterQuestionComponent', () => {
  let component: ParameterQuestionComponent;
  let fixture: ComponentFixture<ParameterQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
