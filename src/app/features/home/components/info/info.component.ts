import { Component, OnInit } from '@angular/core';
import { BreakpointService } from 'src/app/services/shared/breakpoint/breakpoint.service';

@Component({
  selector: 'home-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  infoCard: string[] = [
    'components.info-nav.section1.title',
    'components.info-nav.section2.title',
    'components.info-nav.section3.title'
  ]

  break: number = 3
  ratio: string = '350px'

  constructor(
    private responsive: BreakpointService
  ) { }

  ngOnInit(): void {
    this.responsive.breakpoint$.subscribe(result => {
      if (result == 'XSmall') {
        this.break = 1
      } else if(result == 'Small') {
        this.break = 1
      }else {
        this.break = 3
        this.ratio = '350px'
      }
    })
  }

}
