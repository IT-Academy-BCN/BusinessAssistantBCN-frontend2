import { BigMallsSearch, CommercialGalleriesSearch, LargeEstablishmentsSearch, MarketsAndFairsSearch, MunicipalMarketsSearch } from './../../../shared/models/my-environment-search/my-environment-search.model';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MyEnvironmentService } from './my-environment.service';


describe('MyEnvironmentService', () => {

  let service:MyEnvironmentService;
  let httpMock: HttpTestingController;
 
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers:[ MyEnvironmentService]
    }).compileComponents();

     service = TestBed.inject(MyEnvironmentService);
     httpMock = TestBed.inject(HttpTestingController);
  });
  

  it('should be created', () => {
    
    expect(service).toBeTruthy();
    
  });

  it('should call correct Economic activities backend api when you select Big Malls search Type', () => {
    service.getEconomicActivities(0).subscribe((response) => {
     return response;
    })

   const testRequest = httpMock.expectOne(
   (request) => request.url === "/businessassistantbcn/api/v1/opendata/big-malls/activities"
   );
   expect(testRequest.request.method).toBe("GET");
  })

  it('should call default Big Malls Economic activities backend api when search does not match 5 options', () => {
    service.getEconomicActivities(239).subscribe((response) => {
     return response;
    })

   const testRequest = httpMock.expectOne(
   (request) => request.url === "/businessassistantbcn/api/v1/opendata/big-malls/activities"
   );
   expect(testRequest.request.method).toBe("GET");
  })

   it('should call correct backend api when you select Big Malls search Type', () => {
    
     const businessModelSearch = new BigMallsSearch;
     service.getResults(businessModelSearch).subscribe((response) => {
      return response;
     })

    const testRequest = httpMock.expectOne(
    (request) => request.url === "/businessassistantbcn/api/v1/opendata/big-malls"
    );

    expect(testRequest.request.method).toBe("GET");
   })

   it('should call correct backend api when you select Commercial Galleries search Type', () => {
    
    const businessModelSearch = new CommercialGalleriesSearch;
    service.getResults(businessModelSearch).subscribe((response) => {
     return response;
    })

   const testRequest = httpMock.expectOne(
   (request) => request.url === "/businessassistantbcn/api/v1/opendata/commercial-galleries/activities"
   );
   expect(testRequest.request.method).toBe("GET");
  })

  it('should call correct backend api when you select Large Establishments search Type', () => {
    
    const businessModelSearch = new LargeEstablishmentsSearch;
    service.getResults(businessModelSearch).subscribe((response) => {
     return response;
    })

   const testRequest = httpMock.expectOne(
   (request) => request.url === "/businessassistantbcn/api/v1/opendata/large-establishments/search"
   );
   expect(testRequest.request.method).toBe("GET");
  })

  it('should call correct backend api when you select Large Establishments search Type', () => {
    
    const businessModelSearch = new LargeEstablishmentsSearch;
    service.getResults(businessModelSearch).subscribe((response) => {
     return response;
    })

   const testRequest = httpMock.expectOne(
   (request) => request.url === "/businessassistantbcn/api/v1/opendata/large-establishments/search"
   );
   expect(testRequest.request.method).toBe("GET");
  })

  it('should call correct backend api when you select Market Fairs search Type', () => {
    
    const businessModelSearch = new MarketsAndFairsSearch;
    service.getResults(businessModelSearch).subscribe((response) => {
     return response;
    })

   const testRequest = httpMock.expectOne(
   (request) => request.url === "/businessassistantbcn/api/v1/opendata/market-fairs"
   );
   expect(testRequest.request.method).toBe("GET");
  })

  it('should call correct backend api when you select Municipial Markets search Type', () => {
    
    const businessModelSearch = new MunicipalMarketsSearch;
    service.getResults(businessModelSearch).subscribe((response) => {
     return response;
    })

   const testRequest = httpMock.expectOne(
   (request) => request.url === "/businessassistantbcn/api/v1/opendata/municipal-markets"
   );
   expect(testRequest.request.method).toBe("GET");
  })

  it('should call correct default api when you do not select search Type', () => {
    
    const businessModelSearch = new MunicipalMarketsSearch;
    service.getResults(businessModelSearch).subscribe((response) => {
     return response;
    })

   const testRequest = httpMock.expectOne(
   (request) => request.url === "/businessassistantbcn/api/v1/opendata/municipal-markets"
   );
   expect(testRequest.request.method).toBe("GET");
  })
  
});




