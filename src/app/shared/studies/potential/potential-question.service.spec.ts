import { TestBed } from '@angular/core/testing';

import { PotentialQuestionService } from './potential-question.service';

describe('PotentialQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PotentialQuestionService = TestBed.get(PotentialQuestionService);
    expect(service).toBeTruthy();
  });
});
