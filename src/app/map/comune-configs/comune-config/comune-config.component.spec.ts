import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComuneConfigComponent } from './comune-config.component';

describe('ComuneConfigComponent', () => {
  let component: ComuneConfigComponent;
  let fixture: ComponentFixture<ComuneConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComuneConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComuneConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
