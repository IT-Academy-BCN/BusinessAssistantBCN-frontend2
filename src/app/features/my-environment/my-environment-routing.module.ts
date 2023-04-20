import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyEnvironmentPageComponent } from './components/my-environment-page/my-environment-page.component';
import { SearchAndResultComponent } from './components/search-and-result/search-and-result.component';

const routes: Routes = [
  {
    path: '',
    component: MyEnvironmentPageComponent,
    
  },
  {
    path: 'big-malls',
    component: SearchAndResultComponent,
  },
  {
    path: 'commercial-galleries',
    component: SearchAndResultComponent,
  },
  {
    path: 'large-establishments',
    component: SearchAndResultComponent,
  },
  {
    path: 'markets-and-fairs',
    component: SearchAndResultComponent,
  },
  {
    path: 'municipal-markets',
    component: SearchAndResultComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyEnvironmentRoutingModule { }
