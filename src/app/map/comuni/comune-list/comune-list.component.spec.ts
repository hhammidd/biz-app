import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComuneListComponent } from './comune-list.component';

describe('ComuneListComponent', () => {
  let component: ComuneListComponent;
  let fixture: ComponentFixture<ComuneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComuneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComuneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
