import { TestBed } from '@angular/core/testing';

import { CaseWorkerAccountService } from './case-worker-account.service';

describe('CaseWorkerAccountService', () => {
  let service: CaseWorkerAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseWorkerAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
