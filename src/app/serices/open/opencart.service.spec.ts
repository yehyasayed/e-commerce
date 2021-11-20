import { TestBed } from '@angular/core/testing';

import { OpencartService } from './opencart.service';

describe('OpencartService', () => {
  let service: OpencartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpencartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
