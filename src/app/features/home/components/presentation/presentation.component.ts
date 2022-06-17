import { Component, OnInit } from '@angular/core';
import { BreakpointService } from 'src/app/services/shared/breakpoint/breakpoint.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  break: number = 2
  ratio: string = '800px'

  constructor(private responsive: BreakpointService) { }

  ngOnInit(): void {
    this.responsive.breakpoint$.subscribe(result => {
      if (result == 'XSmall') {
        this.break = 1
      } else if(result == 'Small') {
        this.break = 1
      }else {
        this.break = 2
        this.ratio = '300px'
      }
    })
  }





  
}
