import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { getTestBed, TestBed } from "@angular/core/testing";
import { environment } from "./environment";

describe('environtments endpoints', () => {
    let injector: TestBed;
    let httpMock: HttpTestingController;
    
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
       
      });
      injector = getTestBed();
      httpMock = injector.get(HttpTestingController);
    });

    it('should connect endpoints to server', () => {

        [
            'BACKEND_ZONES_URL', /* ok */
            'BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL', /* OK */
          /*   'BACKEND_LARGE_STABLISHMENTS_SEARCH_URL', */ /* 400 - Bad Request */
            'BACKEND_COMMERCIAL_GALLERIES_ACTIVITIES_URL', /* OK */ 
            'BACKEND_SAVED_SEARCHES_URL',
            'BACKEND_BIG_MALLS_URL', /* OK  */
            'BACKEND_BIG_MALLS_ACTIVITIES_URL', /*  OK  */
            'BACKEND_MUNICIPAL_MARKETS', /*  OK  */

        ].forEach(element => {
            
            httpMock.expectOne(`http://87.106.229.175:7777${(environment as any)[element]}`)
        });
        
    });
});