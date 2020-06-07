import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticListComponent } from './logistic-list.component';

describe('LogisticListComponent', () => {
  let component: LogisticListComponent;
  let fixture: ComponentFixture<LogisticListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
