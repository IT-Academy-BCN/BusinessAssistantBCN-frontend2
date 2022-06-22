import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointService } from 'src/app/services/shared/breakpoint/breakpoint.service';
import { zoomTitle } from './animation/header.animation';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  animations: [
    zoomTitle
  ]
})
export class HeaderComponent implements OnInit {

  buttons: string[] =  [
      'common.button.search',     
      'components.header.section2.title',
      'components.header.section4.title',
      'components.footer.section4.title',
      'common.button.login',
    ]

  title: string = 'inactive'
  menu: boolean = false

  
  constructor(
    private responsive: BreakpointService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.responsive.breakpoint$.subscribe(result => {
      console.log(result)
      if(result == 'Small' || result == 'XSmall'){
        this.menu = true
      }else{
        this.menu = false
      }
    })
  }

  toggleTitle(){
    this.title = this.title === 'inactive' ? 'active' : 'inactive'
  }

  goToLink(num: number){
    if (num == 4) {
      this.router.navigate(['login'])
    }
  }



}