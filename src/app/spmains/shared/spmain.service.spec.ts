import { TestBed } from '@angular/core/testing';

import { SpmainService } from './spmain.service';

describe('SpmainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpmainService = TestBed.get(SpmainService);
    expect(service).toBeTruthy();
  });
});
