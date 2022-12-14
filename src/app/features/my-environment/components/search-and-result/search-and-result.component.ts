import { SearchItemResult } from './../../../../shared/models/my-environment-search/search-item-result.model';
import { MyEnvironmentService } from './../../services/my-environment.service';
import { EconomicActivity } from 'src/app/shared/models/common/economic-activity.model';
import { CommonService } from 'src/app/services/common/common.service';
import { Component, OnInit, Input } from '@angular/core';
import { MyEnvironmentSearch, BigMallsSearch, CommercialGalleriesSearch, LargeEstablishmentsSearch, MarketsAndFairsSearch, MunicipalMarketsSearch, SearchType } from 'src/app/shared/models/my-environment-search/my-environment-search.model';
import { BreakpointService } from 'src/app/services/shared/breakpoint/breakpoint.service';
import {  MY_ENVIRONMENT_MAT_GRID_LIST } from 'src/app/shared/components/component-constants';
import { Zone } from 'src/app/shared/models/common/zone.model';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-and-result',
  templateUrl: './search-and-result.component.html',
  styleUrls: ['./search-and-result.component.scss']
})
export class SearchAndResultComponent implements OnInit {

  @Input() title = '';
   // Responsive Breakpoint
   breakpoint: number | string | "Unknown";
   ratio: string | number;
   showResults: boolean = false;
   selectedList: any[] = [];

   businessModel:SearchType=0 
   bussinesModelSearch!:MyEnvironmentSearch | BigMallsSearch | CommercialGalleriesSearch | LargeEstablishmentsSearch | MarketsAndFairsSearch | MunicipalMarketsSearch

    zones:Zone[] = []; //zones will store all the available zones
    activities:EconomicActivity[] =[]; //activities will store all the available economic activities before any selection
    selectedZones: Zone[] = [];
    selectedActivities:EconomicActivity[] = [];
    searchResults: SearchItemResult[] = [];

   zonesSub:Subscription | null= null;
   activitiesSub:Subscription | null= null;
   environments:Subscription | null = null;

  constructor(private responsive: BreakpointService,
    private myEnvSrv: MyEnvironmentService,
    private commonService:CommonService) { 
    const value =  MY_ENVIRONMENT_MAT_GRID_LIST.get(this.responsive.getCurrentScreenSize());
    if (value != undefined) {
      this.breakpoint = value[0];
      this.ratio = value[1];
    } else {
      this.breakpoint = 0;
      this.ratio = "150px";
    }
  }

  myEnvironmentSearch: MyEnvironmentSearch | BigMallsSearch | CommercialGalleriesSearch | LargeEstablishmentsSearch | MarketsAndFairsSearch | MunicipalMarketsSearch = {
    searchType: 0,
    activities: [],
   zone: {
    idZone: 0,
    zoneName: '',
    },
   result: []
  };

  defineSearchType(str: string){
    if (str == 'common.button.mall') {
      this.myEnvironmentSearch = new BigMallsSearch;
      //Here go all the data of Big-malls
    }else if (str == 'common.button.gallery-market') {
      this.myEnvironmentSearch = new CommercialGalleriesSearch;
      //Here go all the data of Commercial-galleries
    }else if (str == 'common.button.big-stablish') {
      this.myEnvironmentSearch = new LargeEstablishmentsSearch;
      //Here go all the data of Large-stablishments
    }else if (str == 'common.button.market-fair') {
      this.myEnvironmentSearch = new MarketsAndFairsSearch;
      //Here go all the data of Market-fairs
    }else if (str == 'common.button.public-market') {
      this.myEnvironmentSearch = new MunicipalMarketsSearch;
      //Here go all the data of Municipal-markets
    }
    this.bussinesModelSearch = this.myEnvironmentSearch
  }

  goToResult(bussinesModelSearch:MyEnvironmentSearch | BigMallsSearch | CommercialGalleriesSearch | LargeEstablishmentsSearch | MarketsAndFairsSearch | MunicipalMarketsSearch) {
    this.showResults = true;

    this.environments=this.myEnvSrv.getResults(bussinesModelSearch).subscribe((response:any)=>{
    response.results.forEach( (result: any) => { 
      this.searchResults.push( {
        name: result.name,
        web: result.web,
        email: result.email,
        phone: result.phone,
        addresses: result.addresses
          })
        })
     })
  }

  checkZones(zoneSelected: Zone, event: any) {
       if (event) {
          //Adds the selected zone to the array zones in the common service to use it there as parameter
          this.selectedZones.push(zoneSelected);
        } else {
          //removes the zone if it is already in the common service array
          this.selectedZones.splice(this.selectedZones.indexOf(zoneSelected),1);
        }
      }

  checkActivities(activitySelected: EconomicActivity, event: any) {
            if (event) {
          
              //Adds the selected activity to the selected activities array
              this.selectedActivities.push(activitySelected);
            } else {
              //removes the selected if it is already in the selected activities arary
              this.selectedActivities.splice(this.selectedActivities.indexOf(activitySelected),1);
            }
          }

  getAllZones(){
    this.zonesSub=this.commonService.getZones().subscribe(response=>{
      this.zones=response.elements;
      //may need to rever to response.results depending on object hierarchies
    })
  }

  getAllActivities(businessModel:SearchType){
    this.activitiesSub=this.myEnvSrv.getEconomicActivities(businessModel).subscribe(response=>{
    this.activities=response.results;
    })
  }


  selectItem(item:any){

    const selectedIndex = this.selectedList.findIndex(e=>e==item), list = [...this.selectedList];

    if(selectedIndex==-1) list.push(item); else list.splice(selectedIndex,1);

    this.selectedList = list;

  }

  ngOnInit(): void {

    this.defineSearchType(this.title);

    this.responsive.breakpoint$.subscribe((res) => {
      MY_ENVIRONMENT_MAT_GRID_LIST.forEach((value, key) => {
        if (key == res) {
          this.breakpoint = value[0];
          this.ratio = value[1];
        }
      });
    });

    this.getAllZones(); //gets all the zones available from the common service

    this.getAllActivities(this.businessModel); //gets all the activities available from my environment service
  }

}
