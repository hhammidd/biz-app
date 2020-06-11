import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneInfoListComponent } from './zone-info-list.component';

describe('ZoneInfoListComponent', () => {
  let component: ZoneInfoListComponent;
  let fixture: ComponentFixture<ZoneInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
