import { CommonService } from './../services/common/common.service';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { interceptorProvider, JwtInterceptorService } from './jwt-interceptor.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const BEARER = environment.BEARER;
const TOKEN = environment.BACKEND_TOKEN;
const BACKEND_BASE_URL = environment.BACKEND_BASE_URL;
const BACKEND_ZONES_URL = environment.BACKEND_ZONES_URL;

describe('JwtInterceptorService', () => {
  let interceptor: JwtInterceptorService;
  let service: CommonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommonService, interceptorProvider]

    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CommonService);
    interceptor = TestBed.inject(JwtInterceptorService);
  });

  afterEach(()=> {
    httpMock.verify();
  })

  test('Should be created', () => {
    expect(interceptor).toBeTruthy();
    
  });

  test('Should set Authorization to http header', ()=>{
    service.getZones().subscribe();
    const testRequest = httpMock.expectOne(`${ BACKEND_BASE_URL }${ BACKEND_ZONES_URL }`);
    expect(testRequest.request.headers.has('Authorization')).toEqual(true);
  })

  test('Should set token to http header', ()=>{
    service.getZones().subscribe();
    const testRequest = httpMock.expectOne(`${ BACKEND_BASE_URL }${ BACKEND_ZONES_URL }`);
    expect(testRequest.request.headers.get('Authorization')).toBe(`${BEARER}${TOKEN}`);
  })

});
