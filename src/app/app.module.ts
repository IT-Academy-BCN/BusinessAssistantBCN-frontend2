// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { HomeModule } from './features/home/home.module';

// MODULE: APP ROUTING
import { AppRoutingModule } from './app-routing.module';

// APP COMPONENT
import { AppComponent } from './app.component';

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
    AppComponent,
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

    VirtualAssistantModule,
    CoreModule,
    HomeModule
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

