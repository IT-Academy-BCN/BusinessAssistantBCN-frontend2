// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// APP COMPONENT
import { AppComponent } from './app.component';

// MODULE: APP ROUTING
import { AppRoutingModule } from './app-routing.module';

// MODULE: BROWSER ANIMATIONS MODULE, is necessary for Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// @NGX-TRANSLATE/CORE
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

// TranslateHttpLoader
import { HttpLoaderFactory } from './shared/translate/i18-translate.module';

// MODULE: SHARED
import { SharedModule } from './shared/shared.module';

// MODULE: [FEATURE] VIRTUAL-ASSISTANT
import { VirtualAssistantModule } from './features/virtual-assistant/virtual-assistant.module';
import { HomeModule } from './features/home/home.module';
import { UsersModule } from './features/users/users.module';
import { MyEnvironmentModule } from './features/my-environment/my-environment.module';


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

    // SHARED MODULE
    SharedModule,
    //FEATURES
    HomeModule,
    UsersModule,
    MyEnvironmentModule,
    VirtualAssistantModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    // TranslateModule
  ]
})
export class AppModule { }


