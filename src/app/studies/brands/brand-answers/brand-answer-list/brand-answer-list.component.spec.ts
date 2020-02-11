import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandAnswerListComponent } from './brand-answer-list.component';

describe('BrandAnswerListComponent', () => {
  let component: BrandAnswerListComponent;
  let fixture: ComponentFixture<BrandAnswerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandAnswerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandAnswerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
