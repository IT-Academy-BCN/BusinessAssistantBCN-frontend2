import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
      'components.header.section2.title',
      'components.header.section4.title',
      'components.footer.section4.title',
      'common.button.search',     
    ]
  }

  title: string = 'inactive'
  menu: boolean = false

  
  constructor(private responsive: BreakpointObserver) { }

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



}
