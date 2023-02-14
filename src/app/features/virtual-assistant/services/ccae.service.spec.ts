import { TestBed } from '@angular/core/testing';

import { CcaeService } from './ccae.service';

describe('CcaeService', () => {
  let service: CcaeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcaeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
