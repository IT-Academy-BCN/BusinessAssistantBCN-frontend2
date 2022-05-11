// ANGULAR CORE & COMMON
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CoreModule } from 'src/app/core/core.module';

import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule
  ],
    
  providers:[
  ],
  exports:[
 
  ]
})
export class HomeModule { }
