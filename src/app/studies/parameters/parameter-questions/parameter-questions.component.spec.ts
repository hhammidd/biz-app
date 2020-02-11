import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterQuestionsComponent } from './parameter-questions.component';

describe('ParameterQuestionsComponent', () => {
  let component: ParameterQuestionsComponent;
  let fixture: ComponentFixture<ParameterQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
