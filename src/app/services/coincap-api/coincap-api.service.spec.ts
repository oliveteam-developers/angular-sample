import { TestBed } from '@angular/core/testing';

import { CoincapApiService } from './coincap-api.service';

describe('CoincapApiService', () => {
  let service: CoincapApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoincapApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
