import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpmaincontainerComponent } from './spmaincontainer.component';

describe('SpmaincontainerComponent', () => {
  let component: SpmaincontainerComponent;
  let fixture: ComponentFixture<SpmaincontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpmaincontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpmaincontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
