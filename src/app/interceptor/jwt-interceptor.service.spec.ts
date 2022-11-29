
import { MyEnvironmentService } from './../features/my-environment/services/my-environment.service';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { interceptorProvider, JwtInterceptorService } from './jwt-interceptor.service';
import { HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const BEARER = environment.BEARER;
const TOKEN = environment.BACKEND_TOKEN;

describe('JwtInterceptorService', () => {
  let interceptor: JwtInterceptorService;
  beforeEach(() => {
    interceptor = new JwtInterceptorService();
  });

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports: [HttpClientTestingModule],
  //     providers: [
  //       {
  //         provide: MyEnvironmentService,
  //         useValue: mockAuthService
  //       },
  //       {
  //         provide: interceptorProvider
  //       }]
  //   });
  // });

  it('adds the authentication header to the request', () => {

    let modifiedRequest: any;
    const fakeRequest = new HttpRequest('GET', 'fakeUrl');
    const fakeNext: any = {
      handle: jasmine.createSpy().and.callFake(request => {
        modifiedRequest = request;
      })
    };
    interceptor.intercept(fakeRequest, fakeNext);


    expect(fakeNext.handle).toHaveBeenCalled();
    expect(modifiedRequest.headers.has('Authorization')).toEqual(true);
    expect(modifiedRequest.headers.has('Authorization')).toEqual(BEARER + TOKEN);

  });

});
