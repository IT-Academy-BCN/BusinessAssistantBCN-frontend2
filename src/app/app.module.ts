// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// APP COMPONENT
import { AppComponent } from './app.component';

// MODULE: APP ROUTING
import { AppRoutingModule } from './app-routing.module';

// MODULE: BROWSER ANIMATIONS MODULE, is necessary for Material 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MODULE: [FEATURE] VIRTUAL-ASSISTANT
import { VirtualAssistantModule } from './features/virtual-assistant/virtual-assistant.module';

//MODULE: TRANSLATE
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    // FEATURES MODULES
    VirtualAssistantModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    TranslateModule
  ]
})
export class AppModule { }

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

