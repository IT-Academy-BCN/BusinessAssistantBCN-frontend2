
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyEnvironmentService } from '../../services/my-environment.service';
import { Icons } from './environment-models';
import {BreakpointService} from '../../../../services/shared/breakpoint/breakpoint.service';




@Component({
  selector: 'app-my-environment-page',
  templateUrl: './my-environment-page.component.html',
  styleUrls: ['./my-environment-page.component.scss']
})
export class MyEnvironmentPageComponent implements OnInit {

  size:string = '';

  iconsList:Icons [] = [];

  buttons: string[] = [
    'common.button.mall',
    'common.button.gallery-market',
    'common.button.big-stablish',
    'common.button.market-fair',
    'common.button.public-market',
  ];


  constructor(
    private router: Router,
    private myEnvSrv: MyEnvironmentService,
    private _responsive: BreakpointService
  
  ) { 
    const currentScreenSize = this._responsive.getCurrentScreenSize();
    this.size = currentScreenSize;
    console.log(`esta es la medida ${currentScreenSize}`);
  }

  ngOnInit(): void {
    this.iconsList = this.myEnvSrv.iconsList;
    this._responsive.breakpoint$.subscribe(result => {
      this.size = result;
    });



  }

//For go to my-environment-search

  goToSearch(num: number){
    this.router.navigate(['my-environment-search'])
    if (num == 0) {
      this.myEnvSrv.title = 'common.button.mall'
      //Here go all the data of Big-malls
    }else if (num == 1) {
      this.myEnvSrv.title = 'common.button.gallery-market'
      //Here go all the data of Commercial-galleries
    }else if (num == 2) {
      this.myEnvSrv.title = 'common.button.big-stablish'
      //Here go all the data of Large-stablishments
    }else if (num == 3) {
      this.myEnvSrv.title = 'common.button.market-fair'
      //Here go all the data of Market-fairs
    }else if (num == 4) {
      this.myEnvSrv.title = 'common.button.public-market'
      //Here go all the data of Municipal-markets
    }
  }

  getClassHover(){
    let cl = '';
    if(this.size === 'Medium' || this.size === 'Large' || this.size === 'XLarge' ){
      cl = 'env-hovering'
    }
    return cl;
  }

//end



}
