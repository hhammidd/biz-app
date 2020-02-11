import { TestBed } from '@angular/core/testing';

import { BrandAnswerService } from './brand-answer.service';

describe('BrandAnswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrandAnswerService = TestBed.get(BrandAnswerService);
    expect(service).toBeTruthy();
  });
});
