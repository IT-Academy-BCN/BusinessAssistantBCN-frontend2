import { Router } from '@angular/router';
import { SearchItemResult } from './../../../../shared/models/my-environment-search/search-item-result.model';
import { MyEnvironmentService } from './../../services/my-environment.service';
import { EconomicActivity } from 'src/app/shared/models/common/economic-activity.model';
import { CommonService } from 'src/app/services/common/common.service';
import { Component, OnInit, Input } from '@angular/core';
import { MyEnvironmentSearch, BigMallsSearch, CommercialGalleriesSearch, LargeEstablishmentsSearch, MarketsAndFairsSearch, MunicipalMarketsSearch, SearchType } from 'src/app/shared/models/my-environment-search/my-environment-search.model';
import { BreakpointService } from 'src/app/services/shared/breakpoint/breakpoint.service';
import { MY_ENVIRONMENT_MAT_GRID_LIST } from 'src/app/shared/components/component-constants';
import { Zone } from 'src/app/shared/models/common/zone.model';
import { Subscription } from 'rxjs';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;




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

  @Input() businessModel!: SearchType;
  businessModelSearch!: MyEnvironmentSearch;

  zones: Zone[] = []; //zones will store all the available zones
  activities: EconomicActivity[] = []; //activities will store all the available economic activities before any selection
  selectedZones: Zone[] = [];
  selectedActivities: EconomicActivity[] = [];
  searchResults: SearchItemResult[] = [];

  zonesSub: Subscription | null = null;
  activitiesSub: Subscription | null = null;
  environments: Subscription | null = null;

  constructor(
    private router: Router,
    private responsive: BreakpointService,
    private myEnvSrv: MyEnvironmentService,
    private commonService: CommonService) {
    const value = MY_ENVIRONMENT_MAT_GRID_LIST.get(this.responsive.getCurrentScreenSize());
    if (value != undefined) {
      this.breakpoint = value[0];
      this.ratio = value[1];
    } else {
      this.breakpoint = 0;
      this.ratio = "150px";
    }
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
    if (this.businessModel <= 2) {
      this.getAllActivities(); //gets all the activities available from my environment service
    }
  }

  getAllZones() {
    this.zonesSub = this.commonService.getZones().subscribe(response => {
      this.zones = response.elements;
      console.log(response)
    })
  }

  getAllActivities() {
    this.activitiesSub = this.myEnvSrv.getEconomicActivities(this.businessModel).subscribe(response => {
      this.activities = response.results;
      console.log(response)
    })
  }

  defineSearchType(str: string) {
    if (str == 'common.button.mall') {
      this.businessModelSearch = new BigMallsSearch();
    } else if (str == 'common.button.gallery-market') {
      this.businessModelSearch = new CommercialGalleriesSearch();
      //Here go all the data of Commercial-galleries
    } else if (str == 'common.button.big-stablish') {
      this.businessModelSearch = new LargeEstablishmentsSearch();
      //Here go all the data of Large-stablishments
    } else if (str == 'common.button.market-fair') {
      this.businessModelSearch = new MarketsAndFairsSearch();
      //Here go all the data of Market-fairs
    } else if (str == 'common.button.public-market') {
      this.businessModelSearch = new MunicipalMarketsSearch();
      //Here go all the data of Municipal-markets
    }
  }

  goToResult() {
    
    this.businessModelSearch.activities = this.selectedActivities;
    this.businessModelSearch.zones = this.selectedZones;
    this.showResults = true;

    this.environments = this.myEnvSrv.getResults(this.businessModelSearch).subscribe((response: any) => {
      response.results.forEach((result: any) => {
        this.searchResults.push({
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
      this.selectedZones.splice(this.selectedZones.indexOf(zoneSelected), 1);
    }
  }

  checkActivities(activitySelected: EconomicActivity, event: any) {
    if (event) {
      //Adds the selected activity to the selected activities array
      this.selectedActivities.push(activitySelected);
    } else {
      //removes the selected if it is already in the selected activities arary
      this.selectedActivities.splice(this.selectedActivities.indexOf(activitySelected), 1);
    }
  }

  onSaveSearch(){
    this.router.navigate(['saved-searches']);
  }
  // selectItem(item: any) {
  //   const selectedIndex = this.selectedList.findIndex(e => e == item), list = [...this.selectedList];
  //   if (selectedIndex == -1) list.push(item); else list.splice(selectedIndex, 1);
  //   this.selectedList = list;
  // }

  //test pdf 
  generateDocument() {
    //definition of content array for the pdf table
    // const dataArray: string[][] = [];
    // this.businessModels.forEach(element => {
    //     const values:any[]=[];
    //     values.push(element.name);
    //     values.push(element.web);
    //     values.push(element.email);
    //     //create a string from the address object
    //     values.push(`${element.addresses[0].street_name} ${element.addresses[0].street_number}, ${element.addresses[0].zip_code}, ${element.addresses[0].town}`)
    //     dataArray.push(values)
    // })
    // //first element is an array of the table headers
    // dataArray.unshift(['Name' , 'Web' , 'E-mail' , 'Address'])

    const dd = {
      content: [
        'First paragraph',
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
      ]
    }
    return dd ;
  }
 

  openPdf(){
    // @ts-ignore

    pdfMake.createPdf(this.generateDocument()).open();
}

savePdf(){
    // @ts-ignore
    pdfMake.createPdf(this.generateDocument()).download();
}
}
