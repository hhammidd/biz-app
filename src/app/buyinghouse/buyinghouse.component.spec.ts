import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyinghouseComponent } from './buyinghouse.component';

describe('BuyinghouseComponent', () => {
  let component: BuyinghouseComponent;
  let fixture: ComponentFixture<BuyinghouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyinghouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyinghouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
