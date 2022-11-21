import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointService } from 'src/app/services/shared/breakpoint/breakpoint.service';
import { MyEnvironmentService } from '../../services/my-environment.service';
import { MY_ENVIRONMENT_MAT_GRID_LIST } from 'src/app/shared/components/component-constants';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common/common.service';
import {Zone} from "../../../../shared/models/common/zone.model";
import {EconomicActivity} from "../../../../shared/models/common/economic-activity.model";
import { MyEnvironmentSearch, BigMallsSearch, CommercialGalleriesSearch, LargeEstablishmentsSearch, MarketsAndFairsSearch, MunicipalMarketsSearch } from 'src/app/shared/models/my-environment-search/my-environment-search.model';

@Component({
  selector: 'app-my-environment-search',
  templateUrl: './my-environment-search.component.html',
  styleUrls: ['./my-environment-search.component.scss']
})
export class MyEnvironmentSearchComponent implements OnInit {

  title: string = '';

  // Responsive Breakpoint
  breakpoint: number | string | "Unknown";
  ratio: string | number;
  
  //zones:ZoneModel[] = []; //zones will store all the available zones before any selection
  //activities:EconomicActivityModel[] =[]; //activities will store all the available economic activities before any selection
  environments:Subscription | null = null;
  activitiesSub:Subscription | null= null;
  zonesSub:Subscription | null= null;

  myEnvironmentSearch: MyEnvironmentSearch | BigMallsSearch | CommercialGalleriesSearch | LargeEstablishmentsSearch | MarketsAndFairsSearch | MunicipalMarketsSearch |  null = null;


  constructor(
    private router: Router,
    private myEnvSrv: MyEnvironmentService,
    private responsive: BreakpointService,
    private commonService:CommonService,
  ) {
    const value = MY_ENVIRONMENT_MAT_GRID_LIST.get(this.responsive.getCurrentScreenSize());
    if (value != undefined) {
      this.breakpoint = value[0];
      this.ratio = value[1];
    } else {
      this.breakpoint = 0;
      this.ratio = "150px";
    }
  }

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

    console.log(this.myEnvironmentSearch)
  }

  ngOnInit(): void {
    this.title = this.myEnvSrv.title;
    this.responsive.breakpoint$.subscribe((res) => {
      MY_ENVIRONMENT_MAT_GRID_LIST.forEach((value, key) => {
        if (key == res) {
          this.breakpoint = value[0];
          this.ratio = value[1];
        }
      });
    });
    this.getAllActivities(this.title); //gets all the activities available from my environment service
    this.getAllZones(); //gets all the zones available from the common service

    console.log(this.ratio, "ratio")
  }

  goToResult() {
    this.router.navigate(['my-environment-result']);
    this.environments=this.myEnvSrv.getResults(this.title).subscribe((response:any)=>{
      //this.myEnvSrv.results.next(response.results);
    })
  }

  checkZones(zoneSelected: Zone, event: any) {
/*    if (event.checked) {
      //Adds the selected zone to the array zones in the common service to use it there as parameter
      this.myEnvSrv.selectedZones.push(zoneSelected);
    } else {
      //removes the zone if it is already in the common service array
      this.myEnvSrv.selectedZones.splice(this.myEnvSrv.selectedZones.indexOf(zoneSelected),1);
    }*/
  }

  checkActivities(activitySelected: EconomicActivity, event: any) {
/*    if (event.checked) {
      //Adds the selected activity to the array zones in the common service to use it there as parameter
      this.myEnvSrv.selectedActivities.push(activitySelected);
    } else {
      //removes the selected if it is already in the common service array
      this.myEnvSrv.selectedActivities.splice(this.myEnvSrv.selectedActivities.indexOf(activitySelected),1);
    }*/
  }



  getAllZones(){
    this.zonesSub=this.commonService.getZones().subscribe(response=>{
      //this.zones=response.results;
    })
  }

  getAllActivities(category: string){
    this.activitiesSub=this.myEnvSrv.getEconomicActivities(category).subscribe(response=>{
     // this.activities=response.results;
    })
  }

}
