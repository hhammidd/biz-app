import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneinfosComponent } from './zoneinfos.component';

describe('ZoneinfosComponent', () => {
  let component: ZoneinfosComponent;
  let fixture: ComponentFixture<ZoneinfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneinfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
