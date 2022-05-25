import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyEnvironmentPageComponent } from './pages/my-environment-page/my-environment-page.component';
import { MyEnvironmentSearchComponent } from './pages/my-environment-search/my-environment-search.component';
import { MyEnvironmentResultComponent } from './pages/my-environment-result/my-environment-result.component';



@NgModule({
  declarations: [
    MyEnvironmentPageComponent,
    MyEnvironmentSearchComponent,
    MyEnvironmentResultComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MyEnvironmentModule { }
