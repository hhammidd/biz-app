import { TestBed } from '@angular/core/testing';

import { PriceInfoService } from './price-info.service';

describe('PriceInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PriceInfoService = TestBed.get(PriceInfoService);
    expect(service).toBeTruthy();
  });
});
