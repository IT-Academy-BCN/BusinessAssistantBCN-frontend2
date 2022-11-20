import { MyEnvironmentService } from './../../services/my-environment.service';
import { EconomicActivity } from 'src/app/shared/models/common/economic-activity.model';
import { CommonService } from 'src/app/services/common/common.service';
import { Component, OnInit, Input } from '@angular/core';
import { MyEnvironmentSearch, BigMallsSearch, CommercialGalleriesSearch, LargeEstablishmentsSearch, MarketsAndFairsSearch, MunicipalMarketsSearch } from 'src/app/shared/models/my-environment-search/my-environment-search.model';
import { BreakpointService } from 'src/app/services/shared/breakpoint/breakpoint.service';
import { VIRTUAL_ASSISTANT_MAT_GRID_LIST } from 'src/app/shared/components/component-constants';
import { Zone } from 'src/app/shared/models/common/zone.model';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-and-result',
  templateUrl: './search-and-result.component.html',
  styleUrls: ['./search-and-result.component.scss']
})
export class SearchAndResultComponent implements OnInit {

   // Responsive Breakpoint
   breakpoint: number | string | "Unknown";
   ratio: string | number;
   showResults: boolean = false;

    zones:Zone[] = []; //zones will store all the available zones
    activities:EconomicActivity[] =[]; //activities will store all the available economic activities before any selection
    selectedZones: Zone[] = [];
    selectedActivities:EconomicActivity[] = [];

   zonesSub:Subscription | null= null;
   activitiesSub:Subscription | null= null;

  constructor(private responsive: BreakpointService,
    private myEnvSrv: MyEnvironmentService,
    private commonService:CommonService) { 
    const value = VIRTUAL_ASSISTANT_MAT_GRID_LIST.get(this.responsive.getCurrentScreenSize());
    if (value != undefined) {
      this.breakpoint = value[0];
      this.ratio = value[1];
    } else {
      this.breakpoint = 0;
      this.ratio = "150px";
    }
  }
  @Input() title = '';

  myEnvironmentSearch: MyEnvironmentSearch | BigMallsSearch | CommercialGalleriesSearch | LargeEstablishmentsSearch | MarketsAndFairsSearch | MunicipalMarketsSearch |  null = null;

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
  }

  goToResult() {

    this.showResults = true;
   // this.router.navigate(['my-environment-result']);

    // this.environments=this.myEnvSrv.getResults(this.title).subscribe((response:any)=>{
    //   //this.myEnvSrv.results.next(response.results);
    // })
  }

  checkZones(zoneSelected: Zone, event: any) {
       if (event.checked) {
          //Adds the selected zone to the array zones in the common service to use it there as parameter
          this.selectedZones.push(zoneSelected);
        } else {
          //removes the zone if it is already in the common service array
          this.selectedZones.splice(this.selectedZones.indexOf(zoneSelected),1);
        }
      }

  checkActivities(activitySelected: EconomicActivity, event: any) {
            if (event.checked) {
              //Adds the selected activity to the selected activities array
              this.selectedActivities.push(activitySelected);
            } else {
              //removes the selected if it is already in the selected activities arary
              this.selectedActivities.splice(this.selectedActivities.indexOf(activitySelected),1);
            }
          }

  getAllZones(){
    this.zonesSub=this.commonService.getZones().subscribe(response=>{
      this.zones=response.results;
    })
  }

  getAllActivities(category: string){
    this.activitiesSub=this.myEnvSrv.getEconomicActivities(category).subscribe(response=>{
    this.activities=response.results;
    })
  }

  ngOnInit(): void {

    this.defineSearchType(this.title);

    this.getAllZones(); //gets all the zones available from the common service

    this.getAllActivities(this.title); //gets all the activities available from my environment service
  }

}
