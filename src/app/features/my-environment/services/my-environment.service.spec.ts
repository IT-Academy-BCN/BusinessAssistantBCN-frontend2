import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MyEnvironmentService } from './my-environment.service';

describe('MyEnvironmentService', () => {

  let service: MyEnvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
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
