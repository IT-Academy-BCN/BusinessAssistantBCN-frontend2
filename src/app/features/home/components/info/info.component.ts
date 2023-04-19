import { Component, OnInit } from '@angular/core';
import { BreakpointService } from 'src/app/shared/services/breakpoint/breakpoint.service';

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

    if (this.responsive.getCurrentScreenSize() == 'XSmall' || this.responsive.getCurrentScreenSize() == 'Small') {
      this.break = 1
      this.ratio = '200px'
    }
    this.responsive.breakpoint$.subscribe(result => {
      console.log(result);
      if (result == 'XSmall') {
        this.break = 1
        this.ratio = '200px'

      } else if (result == 'Small') {
        this.break = 1
        this.ratio = '200px'
      } else {
        this.break = 3
        this.ratio = '350px'
      }
    })
  }

}
