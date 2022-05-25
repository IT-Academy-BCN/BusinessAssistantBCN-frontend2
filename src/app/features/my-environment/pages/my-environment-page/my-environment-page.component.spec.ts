import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEnvironmentPageComponent } from './my-environment-page.component';

describe('MyEnvironmentPageComponent', () => {
  let component: MyEnvironmentPageComponent;
  let fixture: ComponentFixture<MyEnvironmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyEnvironmentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEnvironmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
