
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { LanguageChangerComponent } from './language-changer.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { I18TranslateModule } from 'src/app/shared/translate/i18-translate.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { LanguagesModel } from './language-changer.interface';


describe('LanguageChangerComponent', () => {

/*   test('',() => {
    expect(true).toBe(true);
  }); */


  let component: LanguageChangerComponent;
  let fixture: ComponentFixture<LanguageChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageChangerComponent ],
      imports: [
        I18TranslateModule,
        MatButtonToggleModule,
        HttpClientTestingModule 
      ],
      providers: [
          TranslateService,
          TranslateStore,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass a parameter', () => {
    component.changeLanguage(LanguagesModel.ca)
  })
});