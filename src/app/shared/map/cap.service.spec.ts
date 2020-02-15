import { TestBed } from '@angular/core/testing';

import { CapService } from './cap.service';

describe('CapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapService = TestBed.get(CapService);
    expect(service).toBeTruthy();
  });
});
