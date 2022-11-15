import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MyEnvironmentResultComponent } from './my-environment-result.component';

describe('MyEnvironmentResultComponent', () => {
 /*  test('',() => {
    expect(true).toBe(true);
  }); */

let component: MyEnvironmentResultComponent;
  let fixture: ComponentFixture<MyEnvironmentResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [           
        HttpClientTestingModule, 
        TranslateModule.forRoot() ],
      declarations: [ MyEnvironmentResultComponent  ],
      schemas: [NO_ERRORS_SCHEMA]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEnvironmentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
