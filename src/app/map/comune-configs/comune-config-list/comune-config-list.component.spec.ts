import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComuneConfigListComponent } from './comune-config-list.component';

describe('ComuneConfigListComponent', () => {
  let component: ComuneConfigListComponent;
  let fixture: ComponentFixture<ComuneConfigListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComuneConfigListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComuneConfigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
