import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandQuestionListComponent } from './brand-question-list.component';

describe('BrandQuestionListComponent', () => {
  let component: BrandQuestionListComponent;
  let fixture: ComponentFixture<BrandQuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandQuestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
