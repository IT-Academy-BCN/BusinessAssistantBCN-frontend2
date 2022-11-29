import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MyEnvironmentService } from './my-environment.service';


describe('MyEnvironmentService', () => {

  let service:MyEnvironmentService 
 
 
  beforeEach(() => {

    


    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers:[ MyEnvironmentService]
    }).compileComponents();

     service = TestBed.inject(MyEnvironmentService);
     
  });


  it('should be created', () => {
    
    expect(service).toBeTruthy();
    
  });

  
});
