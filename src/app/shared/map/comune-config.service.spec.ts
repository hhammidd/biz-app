import { TestBed } from '@angular/core/testing';

import { ComuneConfigService } from './comune-config.service';

describe('ComuneConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComuneConfigService = TestBed.get(ComuneConfigService);
    expect(service).toBeTruthy();
  });
});
