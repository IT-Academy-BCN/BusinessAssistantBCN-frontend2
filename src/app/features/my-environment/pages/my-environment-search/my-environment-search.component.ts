import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointService } from 'src/app/services/shared/breakpoint/breakpoint.service';
import { MyEnvironmentService } from '../../services/my-environment.service';
import { VIRTUAL_ASSISTANT_MAT_GRID_LIST } from 'src/app/shared/components/component-constants';
import { Observable, Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common/common.service';
import {Zone} from "../../../../shared/models/common/zone.model";
import {EconomicActivity} from "../../../../shared/models/common/economic-activity.model";

@Component({
  selector: 'app-my-environment-search',
  templateUrl: './my-environment-search.component.html',
  styleUrls: ['./my-environment-search.component.scss']
})
export class MyEnvironmentSearchComponent implements OnInit, OnDestroy {

  title: string = '';

  // Responsive Breakpoint
  breakpoint: number | string | "Unknown";
  ratio: string | number;
  
  //zones:ZoneModel[] = []; //zones will store all the available zones before any selection
  //activities:EconomicActivityModel[] =[]; //activities will store all the available economic activities before any selection
 /*  environments:Subscription | null = null;
  activitiesSub:Subscription | null= null;
  zonesSub:Subscription | null= null; */

  subscription!:Subscription;

  zones$!:Observable<any>;
  activities$!:Observable<any>;


  selectedZones:any = [];
  selectedActivities:any = [];

  constructor(
    private router: Router,
    private myEnvSrv: MyEnvironmentService,
    private responsive: BreakpointService,
    private commonService:CommonService,
  ) {
    const value = VIRTUAL_ASSISTANT_MAT_GRID_LIST.get(this.responsive.getCurrentScreenSize());
    if (value != undefined) {
      this.breakpoint = value[0];
      this.ratio = value[1];
    } else {
      this.breakpoint = 0;
      this.ratio = "150px";
    }
  }

  ngOnInit(): void {
    this.title = this.myEnvSrv.title;
    this.subscription = this.responsive.breakpoint$.subscribe((res) => {
      VIRTUAL_ASSISTANT_MAT_GRID_LIST.forEach((value, key) => {
        if (key == res) {
          this.breakpoint = value[0];
          this.ratio = value[1];
        }
      });
    });
    this.getAllActivities(this.title); //gets all the activities available from my environment service
    this.getAllZones(); //gets all the zones available from the common service
  }

/*   goToResult(){
    
  } */

   goToResult() {

    this.updateSelectionsOnService();
    this.router.navigate(['my-environment-result']);
 /*    this.environments=this.myEnvSrv.getResults(this.title).subscribe((response:any)=>{
  this.myEnvSrv.results.next(response.results);
   }) */
  }

  private updateSelectionsOnService(){

    /* this.myEnvSrv.selectedZones = this.selectedZones;
    this.myEnvSrv.selectedActivities = this.selectedActivities; */

  }

  checkZones(zoneSelected: Zone, event: any) {

    const list = this.selectedZones;

    /* const list = this.myEnvSrv.selectedZones; */
    
    if (event) {
      //Adds the selected zone to the array zones in the common service to use it there as parameter
      list.push(zoneSelected);

    } else {
      //removes the zone if it is already in the common service array      
      const index = list.indexOf(zoneSelected);
      if(index!=-1) list.splice(index,1) 
      
    }

    
  }

  checkActivities(activitySelected: EconomicActivity, event: any) {

    const list = this.selectedActivities;
    /* const list = this.myEnvSrv.selectedActivities */

   if (event) {
      //Adds the selected activity to the array zones in the common service to use it there as parameter
      list.push(activitySelected);
      
    } else {
      //removes the selected if it is already in the common service array
      const index = list.indexOf(activitySelected);
      if(index!=-1) list.splice(index,1)      
    }
    
  }


  getAllZones(){
    this.zones$ =this.commonService.getZones()
  }

  getAllActivities(category: string){
    this.activities$ =this.myEnvSrv.getEconomicActivities(category)
  }

  ngOnDestroy(): void { this.subscription?.unsubscribe();  }

}
