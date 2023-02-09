import { SavedSearchesComponent } from './features/saved-searches/components/saved-searches/saved-searches.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/page/home.component';
import { LoginComponent } from './features/users/components/login/login.component';
import { RegisterComponent } from './features/users/components/register/register.component';
import { VirtualAssistantPageComponent } from './features/virtual-assistant/page-routing/virtual-assistant-page.component';
import { MyEnvironmentPageComponent } from './features/my-environment/components/my-environment-page/my-environment-page.component';
import { LoginModalComponent } from './features/users/components/login-modal/login-modal.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'my-environment', component: MyEnvironmentPageComponent},
  {path: 'virtual-assistant', component: VirtualAssistantPageComponent},
  {path: 'login', component: LoginModalComponent},
  {path: 'register', component: RegisterComponent},
  {path: "saved-searches", component: SavedSearchesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
