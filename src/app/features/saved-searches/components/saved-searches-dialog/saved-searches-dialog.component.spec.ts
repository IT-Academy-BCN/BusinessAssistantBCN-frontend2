import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SavedSearchesService } from './../../services/saved-searches.service';
import { of } from 'rxjs';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SavedSearchesDialogComponent } from './saved-searches-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SavedSearchesDialogComponent', () => {
  let component: SavedSearchesDialogComponent;
  let fixture: ComponentFixture<SavedSearchesDialogComponent>;
  const fakeSavedSearchesSvc = {
    saveSearch: jest.fn()
  }
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SavedSearchesDialogComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        })
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { results: ['result 1', 'result 2'] } },
        { provide: SavedSearchesService, useValue: fakeSavedSearchesSvc }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedSearchesDialogComponent);
    component = fixture.componentInstance;
    jest.spyOn(fakeSavedSearchesSvc, 'saveSearch').mockReturnValue(of('any'));
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('initForm should validate form', () => {
    component.form.get('name')?.setValue('Search 1');
    component.form.get('detail')?.setValue('Detail 1');
    expect(component.form.valid).toBe(true);
  });

  test('onSubmit should get data from MatDialog', () => {
    component.onSubmit();
    expect(component.data.results.length).toBe(2);
  });

});
