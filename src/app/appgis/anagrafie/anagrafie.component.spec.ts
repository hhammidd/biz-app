import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagrafieComponent } from './anagrafie.component';

describe('AnagrafieComponent', () => {
  let component: AnagrafieComponent;
  let fixture: ComponentFixture<AnagrafieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnagrafieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagrafieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
