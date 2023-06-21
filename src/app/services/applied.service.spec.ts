import { TestBed } from '@angular/core/testing';

import { AppliedService } from './applied.service';

describe('AppliedService', () => {
  let service: AppliedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppliedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
