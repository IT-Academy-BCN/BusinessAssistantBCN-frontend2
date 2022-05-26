import { TestBed } from '@angular/core/testing';

import { MyEnvironmentService } from './my-environment.service';

describe('MyEnvironmentService', () => {
  let service: MyEnvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyEnvironmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
