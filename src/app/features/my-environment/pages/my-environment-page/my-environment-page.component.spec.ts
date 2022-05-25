import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MyEnvironmentService } from '../../services/my-environment.service';

import { MyEnvironmentPageComponent } from './my-environment-page.component';

describe('MyEnvironmentPageComponent', () => {
  let component: MyEnvironmentPageComponent;
  let fixture: ComponentFixture<MyEnvironmentPageComponent>;
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        MyEnvironmentPageComponent,
      ],
      
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
      providers: [
        MyEnvironmentService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router)

    fixture = TestBed.createComponent(MyEnvironmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
