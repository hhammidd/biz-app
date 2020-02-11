import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterAnswerListComponent } from './parameter-answer-list.component';

describe('ParameterAnswerListComponent', () => {
  let component: ParameterAnswerListComponent;
  let fixture: ComponentFixture<ParameterAnswerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterAnswerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterAnswerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
