import { TestBed } from '@angular/core/testing';

import { PotentialService } from './potential.service';

describe('PotentialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PotentialService = TestBed.get(PotentialService);
    expect(service).toBeTruthy();
  });
});
