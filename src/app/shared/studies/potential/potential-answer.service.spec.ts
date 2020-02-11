import { TestBed } from '@angular/core/testing';

import { PotentialAnswerService } from './potential-answer.service';

describe('PotentialAnswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PotentialAnswerService = TestBed.get(PotentialAnswerService);
    expect(service).toBeTruthy();
  });
});
