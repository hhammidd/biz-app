import { TestBed } from '@angular/core/testing';

import { BrandQuestionService } from './brand-question.service';

describe('BrandQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrandQuestionService = TestBed.get(BrandQuestionService);
    expect(service).toBeTruthy();
  });
});
