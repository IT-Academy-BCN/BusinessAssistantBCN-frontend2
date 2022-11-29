import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MyEnvironmentService } from './my-environment.service';

describe('MyEnvironmentService', () => {


  

  let service:MyEnvironmentService

  /* 
  jest.mock('MockServices', () => ({

    GeolocateControl: jest.fn(),
    Map: jest.fn(() => ({
      addControl: jest.fn(),
      on: jest.fn(),
      remove: jest.fn(),
    })),
    NavigationControl: jest.fn()

}));
*/
 
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(MyEnvironmentService);
  });

  it('should be created', () => {
    
    expect(service).toBeTruthy();
  });

});
