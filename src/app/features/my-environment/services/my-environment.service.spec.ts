import { TestBed } from '@angular/core/testing';

import { MyEnvironmentService } from './my-environment.service';

describe('MyEnvironmentService', () => {
  test('',() => {
    expect(true).toBe(true);
  });

  let service: MyEnvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyEnvironmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Variables', ()=>{
    it('title should be declared', ()=>{
      expect(service.title).toBeDefined()
    })
  })
});
