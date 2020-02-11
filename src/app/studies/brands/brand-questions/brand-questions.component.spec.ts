import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandQuestionsComponent } from './brand-questions.component';

describe('BrandQuestionsComponent', () => {
  let component: BrandQuestionsComponent;
  let fixture: ComponentFixture<BrandQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
