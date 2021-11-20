import { TestBed } from '@angular/core/testing';

import { OpenadminService } from './openadmin.service';

describe('OpenadminService', () => {
  let service: OpenadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
