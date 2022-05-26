import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEnvironmentSearchComponent } from './my-environment-search.component';

describe('MyEnvironmentSearchComponent', () => {
  let component: MyEnvironmentSearchComponent;
  let fixture: ComponentFixture<MyEnvironmentSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyEnvironmentSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEnvironmentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
