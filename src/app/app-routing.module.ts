import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home/home-page/home-page.component';



// Routes needs to be updated

const routes: Routes = [
  { path: 'home', component: HomePageComponent, data: { breadcrumb: null } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: "login", component: LoginFormComponent },
  // { path: 'my-environment', component: MyEnvironmentPageComponent, data: { breadcrumb: 'my-enviroment' },
  //   children: [
  //   { path: 'large-stablishments', component: LargeStablishmentsPageComponent, data: { breadcrumb: 'big-stablish' },
  //     children: [
  //       { path: 'my-environment-search-detail', component: MyEnvironmentSearchDetailPageComponent, data: { breadcrumb: 'search' } },  
  //     ]},
  //   { path: "commercial-galleries", component: CommercialGalleriesPageComponent, data: { breadcrumb: 'gallery-market' } },
  //   { path: "big-malls", component: BigMallsPageComponent, data: { breadcrumb: 'mall' },
  //     children:[
  //       { path: 'my-environment-search-detail', component: MyEnvironmentSearchDetailPageComponent, data: { breadcrumb: 'search' } },          
  //     ]},
  //   { path: "municipal-markets", component: MunicipalMarketsPageComponent, data: { breadcrumb: 'public-market' },
  //     children: [
  //       { path: 'my-environment-search-detail', component: MyEnvironmentSearchDetailPageComponent, data: { breadcrumb: 'search' } },
  //     ]},
  //   { path: "market-fairs", component: MarketFairsPageComponent, data: { breadcrumb: 'market-fair' } },
  //   ]
  // },
  // { path: 'virtual-assistant', component: VirtualAssistantPageComponent, data: { breadcrumb: 'assistant' } },
  // { path: "saved-searches", component: SavedSearchesComponent, data: { breadcrumb: 'save-results' } },
  // { path: '**', component: HomePageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
