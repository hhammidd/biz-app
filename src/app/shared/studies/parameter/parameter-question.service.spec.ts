import { TestBed } from '@angular/core/testing';

import { ParameterQuestionService } from './parameter-question.service';

describe('ParameterQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParameterQuestionService = TestBed.get(ParameterQuestionService);
    expect(service).toBeTruthy();
  });
});
