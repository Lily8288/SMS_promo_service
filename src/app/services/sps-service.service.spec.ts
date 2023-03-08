import { TestBed } from '@angular/core/testing';

import { SpsService } from './sps.service';

describe('SpsServiceService', () => {
  let service: SpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
