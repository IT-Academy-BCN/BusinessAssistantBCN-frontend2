// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MODULE: APP ROUTING
import { AppRoutingModule } from './app-routing.module';

// APP COMPONENT
import { AppComponent } from './app.component';

// MODULE: BROWSER ANIMATIONS MODULE, is necessary for Material 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MODULE: [FEATURE] VIRTUAL-ASSISTANT
import { VirtualAssistantModule } from './features/virtual-assistant/virtual-assistant.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    VirtualAssistantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
