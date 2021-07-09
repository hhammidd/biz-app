import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsidebarComponent } from './mapsidebar.component';

describe('MapsidebarComponent', () => {
  let component: MapsidebarComponent;
  let fixture: ComponentFixture<MapsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
