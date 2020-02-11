import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandAnswersComponent } from './brand-answers.component';

describe('BrandAnswersComponent', () => {
  let component: BrandAnswersComponent;
  let fixture: ComponentFixture<BrandAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
