import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MyEnvironmentService } from '../../services/my-environment.service';

import { MyEnvironmentSearchComponent } from './my-environment-search.component';

describe('MyEnvironmentSearchComponent', () => {
  let component: MyEnvironmentSearchComponent;
  let fixture: ComponentFixture<MyEnvironmentSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyEnvironmentSearchComponent ],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        })
      ],
      providers: [
        MyEnvironmentService
      ]
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
