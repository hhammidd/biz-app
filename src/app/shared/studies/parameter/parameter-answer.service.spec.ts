import { TestBed } from '@angular/core/testing';

import { ParameterAnswerService } from './parameter-answer.service';

describe('ParameterAnswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParameterAnswerService = TestBed.get(ParameterAnswerService);
    expect(service).toBeTruthy();
  });
});
