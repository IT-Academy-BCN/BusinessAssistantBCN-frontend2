import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndResultComponent } from './search-and-result.component';

describe('SearchAndResultComponent', () => {
  let component: SearchAndResultComponent;
  let fixture: ComponentFixture<SearchAndResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAndResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAndResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
