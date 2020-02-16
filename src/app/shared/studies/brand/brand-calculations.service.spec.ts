import { TestBed } from '@angular/core/testing';

import { BrandCalculationsService } from './brand-calculations.service';

describe('BrandCalculationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrandCalculationsService = TestBed.get(BrandCalculationsService);
    expect(service).toBeTruthy();
  });
});
