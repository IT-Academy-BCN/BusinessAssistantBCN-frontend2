import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/page/home.component';
import { MyEnvironmentPageComponent } from './features/my-environment/pages/my-environment-page/my-environment-page.component';
import { MyEnvironmentResultComponent } from './features/my-environment/pages/my-environment-result/my-environment-result.component';
import { MyEnvironmentSearchComponent } from './features/my-environment/pages/my-environment-search/my-environment-search.component';
import { LoginComponent } from './features/users/components/login/login.component';
import { RegisterComponent } from './features/users/components/register/register.component';
import { VirtualAssistantPageComponent } from './features/virtual-assistant/page-routing/virtual-assistant-page.component';
import { VirtualAssistantComponent } from './features/virtual-assistant/pages/virtual-assistant/virtual-assistant.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'my-environment', component: MyEnvironmentPageComponent},
  {path: 'my-environment-search', component: MyEnvironmentSearchComponent},
  {path: 'my-environment-result', component: MyEnvironmentResultComponent},
  {path: 'virtual-assistant', component: VirtualAssistantComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
