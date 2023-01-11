import { LoginRequest } from './../../../../entities/auth';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;
  const httpClientMock: any = {
    post: jest.fn()
  }
  const newUser: LoginRequest = { email: 'email@gmail.com', password: '1234' }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, { provide: HttpClient, useValue: httpClientMock }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    service = TestBed.inject(AuthService);
  })

  describe('Method:', () => {
  
    test('signup should be created', () => {
      expect(service.signup).toBeTruthy();
    });

    test('signup should call post method from httpClient', () => {
      const url = '/businessassistantbcn/api/v1/usermanagement/user/';
      service.signup(newUser);
      expect(httpClientMock.post).toBeCalledTimes(1);
      expect(httpClientMock.post).toHaveBeenCalledWith(url, newUser);
    });

    test('signup should return expected response', (done) => {
      const expecResp = 'User added'
      jest.spyOn(httpClientMock, 'post').mockReturnValue(of(expecResp));
      service.signup(newUser).subscribe( data => {
        expect(data).toBe(expecResp);
        done();
      })
    });

    test('signup should return error', () => { 
      const badCredentials: LoginRequest = { email: 'whatever', password: '' };
      const error = new HttpErrorResponse({
        error: "Invalid email",
        status: 400,
        statusText: "BAD_REQUEST"
      });
      jest.spyOn(httpClientMock, 'post').mockReturnValue(throwError(error));
      service.signup(badCredentials).subscribe({
        next: data => {
        },
        error: err => {
          expect(err.status).toBe(400);  
        }
      });
    });
  })

});
