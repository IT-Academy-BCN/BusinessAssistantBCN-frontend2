import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { zoomTitle } from './animation/header.animation';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  animations: [
    zoomTitle
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {

  buttons = {
    navigate: [
      'common.button.search',     
      'components.header.section2.title',
      'components.header.section4.title',
      'components.footer.section4.title',
      'common.button.login',
    ]
  }

  title: string = 'inactive'
  menu: boolean = false

  
  constructor(
    private responsive: BreakpointObserver,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.responsive.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
    ]).subscribe(result => {
      console.log(result)
      if(result.breakpoints[Breakpoints.Small] || result.breakpoints[Breakpoints.XSmall]){
        this.menu = true
      }else{
        this.menu = false
      }
    })
  }

  ngOnDestroy(): void {
    this.responsive.ngOnDestroy();
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
