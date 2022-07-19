// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { MyEnvironmentService } from '../../services/my-environment.service';

// @Component({
//   selector: 'app-my-environment-search',
//   templateUrl: './my-environment-search.component.html',
//   styleUrls: ['./my-environment-search.component.scss']
// })
// export class MyEnvironmentSearchComponent implements OnInit {

//   title: string = ''

//   constructor(
//     private router: Router,
//     private myEnvSrv: MyEnvironmentService
//   ) { }

//   ngOnInit(): void {
//     this.title = this.myEnvSrv.title
//   }

//   goToResult(){
//     this.router.navigate(['my-environment-result'])
//   }

// }

import {Component , OnDestroy , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { BreadcrumbService } from '../../../services/breadcrumb.service';
import {Subscription} from "rxjs";
import { CommonService } from '../../services/common.service';
import { ZoneModel } from '../../models/zone.model';
import { EconomicActivityModel } from '../../models/economic-activity.model';


@Component({
  selector: 'app-my-environment-search',
  templateUrl: './my-environment-search.component.html',
   styleUrls: ['./my-environment-search.component.scss']
 })


export class MyEnvironmentSearchComponent implements OnInit,OnDestroy {

  largeStablishments:boolean = false;
  municipalMarkets:boolean = false;
  commercialGalleries:boolean = false;
  marketFairs:boolean = false;
  bigMalls:boolean = false;
  
  zones:ZoneModel[] = []; //zones will store all the available zones before any selection
  activities:EconomicActivityModel[] =[]; //activities will store all the available economic activities before any selection
  currentBusiness:Subscription | null = null;
  environments:Subscription | null = null;
  activitiesSub:Subscription | null= null;
  zonesSub:Subscription | null= null;

  constructor(private commonService:CommonService,
             // private breadcrumbService: BreadcrumbService
              ) {}
  // get breadcrumbs(){
  //   return this.breadcrumbService.breadcrumbs;
  // }

  ngOnInit(): void {
    this.currentBusiness=this.commonService.currentBusiness.asObservable().subscribe((business:string)=>{
      this.commonService.businessModel=business
      if(business==='large-establishments') this.largeStablishments=true;
      if(business==='commercial-galleries') this.commercialGalleries=true;
      if(business==='big-malls') this.bigMalls=true;
      if(business==='municipal-markets') this.municipalMarkets=true;
      if(business==='market-fairs') this.marketFairs=true;
    })
    this.getAllActivities() //gets all the activities available from the common service
    this.getAllZones() //gets all the zones available from the common service

  }

  checkZones(zoneSelected: ZoneModel, event: any) {
    if (event.checked) {
      //Adds the selected zone to the array zones in the common service to use it there as parameter
      this.commonService.zones.push(zoneSelected);
    } else {
      //removes the zone if it is already in the common service array
      this.commonService.zones.splice(this.commonService.zones.indexOf(zoneSelected),1);
    }
  }

  checkActivities(activitySelected: EconomicActivityModel, event: any) {
    if (event.checked) {
      //Adds the selected activity to the array zones in the common service to use it there as parameter
      this.commonService.activities.push(activitySelected);
    } else {
      //removes the selected if it is already in the common service array
      this.commonService.activities.splice(this.commonService.activities.indexOf(activitySelected),1);
    }
  }

  getAllZones(){
    this.zonesSub=this.commonService.getZones().subscribe(response=>{
      this.zones=response.results;
      console.log(response.results)
    })
  }

  getAllActivities(){
    this.activitiesSub=this.commonService.getEconomicActivities().subscribe(response=>{
      this.activities=response.results;
    })
  }

  search(){
    this.environments=this.commonService.getEnvironments().subscribe((response:any)=>{
      this.commonService.results.next(response.results)
      console.log(response.results)
    });
  }

  ngOnDestroy(){
    this.currentBusiness?.unsubscribe();
    this.environments?.unsubscribe();
    this.activitiesSub?.unsubscribe();
    this.zonesSub?.unsubscribe();
  }



}
