import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterAnswerComponent } from './parameter-answer.component';

describe('ParameterAnswerComponent', () => {
  let component: ParameterAnswerComponent;
  let fixture: ComponentFixture<ParameterAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
