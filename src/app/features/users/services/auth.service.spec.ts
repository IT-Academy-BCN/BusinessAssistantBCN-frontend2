import { LoginRequest } from './../../../../entities/auth';
import { AuthService } from './auth.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('AuthService', () => {
  
  let service: AuthService;
  let httpClientMock: any;
  const userData: LoginRequest = { email: 'email@gmail.com', password: '1234' }
  
  beforeEach(() => {
    httpClientMock = {
      post: jest.fn()
    };
    service = new AuthService(httpClientMock);
  })

  describe('Method:', () => {
  
    test('signup should be created', () => {
      expect(service.signup).toBeTruthy();
    });

    test('signup should use HttpClient', () => {
      service.signup(userData);
      expect(httpClientMock.post).toBeCalledTimes(1);
    });

    test('signup should use expected params when send request', () => {
      const url = '/businessassistantbcn/api/v1/usermanagement/user';
      service.signup(userData);
      expect(httpClientMock.post).toHaveBeenCalledWith(url, userData);
    });

    test('login should be created', () => {
      expect(service.login).toBeTruthy();
    });

    test('login should use HttpClient', () => {
      service.login(userData);
      expect(httpClientMock.post).toBeCalledTimes(1);
    });

    test('login should use expected params when send request', () => {
      const url = '/businessassistantbcn/api/v1/login';
      service.login(userData);
      expect(httpClientMock.post).toHaveBeenCalledWith(url, userData);
    });

    test('login should return expected response', (done) => {
      const expecResp = 'Welcome user ...'
      jest.spyOn(httpClientMock, 'post').mockReturnValue(of(expecResp));
      service.login(userData).subscribe( data => {
        expect(data).toBe(expecResp);
        done();
      })
    });

    test('login should return error', () => { 
      const badCredentials: LoginRequest = { email: 'whatever', password: '' };
      const error = new HttpErrorResponse({
        error: "User does not exist ...",
        status: 400,
        statusText: "BAD_REQUEST"
      });
      jest.spyOn(httpClientMock, 'post').mockReturnValue(throwError(error));
      service.login(badCredentials).subscribe({
        next: data => {
        },
        error: err => {
          expect(err.statusText).toEqual('OK');
        }
      });
    });
  })
});
