import { TestBed } from '@angular/core/testing';

import { BrandMicroService } from './brand-micro.service';

describe('BrandMicroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrandMicroService = TestBed.get(BrandMicroService);
    expect(service).toBeTruthy();
  });
});
