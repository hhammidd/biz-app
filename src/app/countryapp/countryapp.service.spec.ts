import { TestBed } from '@angular/core/testing';

import { CountryappService } from './countryapp.service';

describe('CountryappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryappService = TestBed.get(CountryappService);
    expect(service).toBeTruthy();
  });
});
