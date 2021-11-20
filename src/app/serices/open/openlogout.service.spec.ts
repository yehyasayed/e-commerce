import { TestBed } from '@angular/core/testing';

import { OpenlogoutService } from './openlogout.service';

describe('OpenlogoutService', () => {
  let service: OpenlogoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenlogoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
