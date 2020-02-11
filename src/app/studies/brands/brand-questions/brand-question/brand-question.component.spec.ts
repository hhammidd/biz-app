import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandQuestionComponent } from './brand-question.component';

describe('BrandQuestionComponent', () => {
  let component: BrandQuestionComponent;
  let fixture: ComponentFixture<BrandQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
