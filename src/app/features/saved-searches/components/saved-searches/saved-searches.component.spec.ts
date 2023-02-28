import { Observable } from 'rxjs';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SavedSearchesService } from './../../services/saved-searches.service';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SavedSearchesComponent } from './saved-searches.component';
import { of } from 'rxjs';

const response = {
  count: 96,
  offset: 0,
  limit: 0,
  results: [
    {
      search_uuid: 12345,
      user_uuid: 12345,
      search_date: new Date,
      search_name: '',
      search_detail: '',
      search_result: []
    }
  ]
};

class SavedSearchesServiceTesting {
  getSavedSearches(): Observable<any> {
    return of(response);
  }
}

describe('SavedSearchesComponent', () => {
  
  let fixture: ComponentFixture<SavedSearchesComponent>;
  let component: SavedSearchesComponent;
  let service: SavedSearchesService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SavedSearchesComponent],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        })
      ],
      providers: [
        { provide: SavedSearchesService, useClass: SavedSearchesServiceTesting }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(SavedSearchesService);
    fixture = TestBed.createComponent(SavedSearchesComponent);
    component = fixture.componentInstance;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Method:', () => {

    test('ngOnInit should call getSavedSearches metthod', () => {
      const spy = jest.spyOn(service, 'getSavedSearches');
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledTimes(1);
    });

    test('getSavedSearches should return expected length', () => {
      component.getSavedSearches();
      expect(component.savedSearchesData.length).toBe(1);
    });

    test('onResize should return expected value', () => {
      const event = new CustomEvent('resize', { detail: { innerWidth: 700 } });
      window.dispatchEvent(event);
      component.onResize(event);
      expect(component.breakpoint).toBe(4);
    });

  });
});
