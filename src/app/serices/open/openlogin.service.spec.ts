import { TestBed } from '@angular/core/testing';

import { OpenloginService } from './openlogin.service';

describe('OpenloginService', () => {
  let service: OpenloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
