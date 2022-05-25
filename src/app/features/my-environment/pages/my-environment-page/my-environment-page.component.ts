import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyEnvironmentService } from '../../services/my-environment.service';

@Component({
  selector: 'app-my-environment-page',
  templateUrl: './my-environment-page.component.html',
  styleUrls: ['./my-environment-page.component.scss']
})
export class MyEnvironmentPageComponent implements OnInit {


  buttons: string[] = [
    'common.button.mall',
    'common.button.gallery-market',
    'common.button.big-stablish',
    'common.button.market-fair',
    'common.button.public-market',
  ]


  constructor(
    private router: Router,
    private myEnvSrv: MyEnvironmentService
  ) { }

  ngOnInit(): void {

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

//end

}
