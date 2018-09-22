import { TestBed } from '@angular/core/testing';

import { OpenweathermapService } from './openweathermap.service';

describe('OpenweathermapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenweathermapService = TestBed.get(OpenweathermapService);
    expect(service).toBeTruthy();
  });
});
