import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagementsComponent } from './usermanagements.component';

describe('UsermanagementsComponent', () => {
  let component: UsermanagementsComponent;
  let fixture: ComponentFixture<UsermanagementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermanagementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
