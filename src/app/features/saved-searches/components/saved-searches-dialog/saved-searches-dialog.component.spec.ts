import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedSearchesDialogComponent } from './saved-searches-dialog.component';

describe('SavedSearchesDialogComponent', () => {
  let component: SavedSearchesDialogComponent;
  let fixture: ComponentFixture<SavedSearchesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedSearchesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedSearchesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
