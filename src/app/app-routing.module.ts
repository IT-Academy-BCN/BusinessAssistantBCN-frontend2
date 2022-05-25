import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/components/home.component';
import { MyEnvironmentPageComponent } from './features/my-environment/pages/my-environment-page/my-environment-page.component';
import { VirtualAssistantPageComponent } from './features/virtual-assistant/page-routing/virtual-assistant-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'My-environment', component: MyEnvironmentPageComponent},
  {path: 'My-environment-search', component: MyEnvironmentPageComponent},
  {path: 'My-environment-result', component: MyEnvironmentPageComponent},
  {path: 'Virtual-assistant', component: VirtualAssistantPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
