import { TestBed } from '@angular/core/testing';

import { SalepointfolterService } from './salepointfolter.service';

describe('SalepointfolterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalepointfolterService = TestBed.get(SalepointfolterService);
    expect(service).toBeTruthy();
  });
});
