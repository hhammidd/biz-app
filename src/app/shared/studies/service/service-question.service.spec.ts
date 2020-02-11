import { TestBed } from '@angular/core/testing';

import { ServiceQuestionService } from './service-question.service';

describe('ServiceQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceQuestionService = TestBed.get(ServiceQuestionService);
    expect(service).toBeTruthy();
  });
});
