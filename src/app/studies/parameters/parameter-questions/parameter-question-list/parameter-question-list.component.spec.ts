import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterQuestionListComponent } from './parameter-question-list.component';

describe('ParameterQuestionListComponent', () => {
  let component: ParameterQuestionListComponent;
  let fixture: ComponentFixture<ParameterQuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterQuestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
