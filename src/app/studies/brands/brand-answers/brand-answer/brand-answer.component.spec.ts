import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandAnswerComponent } from './brand-answer.component';

describe('BrandAnswerComponent', () => {
  let component: BrandAnswerComponent;
  let fixture: ComponentFixture<BrandAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
