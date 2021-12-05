import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpmainsComponent } from './spmains.component';

describe('SpmainsComponent', () => {
  let component: SpmainsComponent;
  let fixture: ComponentFixture<SpmainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpmainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpmainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
