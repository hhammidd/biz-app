import { TestBed } from '@angular/core/testing';

import { ServiceAnswerService } from './service-answer.service';

describe('ServiceAnswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceAnswerService = TestBed.get(ServiceAnswerService);
    expect(service).toBeTruthy();
  });
});
