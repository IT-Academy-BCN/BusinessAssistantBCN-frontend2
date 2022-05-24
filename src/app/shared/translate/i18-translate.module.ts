// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

// @NGX-TRANSLATE/CORE
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

// @NGX-TRANSLATE/HTTPLOADER
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    TranslateModule
  ]
})
export class I18TranslateModule {
  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'es', 'ca']);
    translate.setDefaultLang('ca');
  }
}

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
