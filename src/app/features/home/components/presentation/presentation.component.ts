import { Component, OnInit } from '@angular/core';
import { BreakpointService } from 'src/app/services/shared/breakpoint/breakpoint.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  // break: number = 2
  // ratio: string = '800px'

  // constructor(private responsive: BreakpointService) { }

  // ngOnInit(): void {
  //   this.responsive.breakpoint$.subscribe(result => {
  //     if (result == 'XSmall') {
  //       this.break = 1
  //     } else if(result == 'Small') {
  //       this.break = 1
  //     }else {
  //       this.break = 2
  //       this.ratio = '300px'
  //     }
  //   })
  // }

  breakpoint: number = 0;
  ratio: string = "";

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(): void {

    this.responsive.observe([
      // Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      // Breakpoints.Large,
      // Breakpoints.XLarge
    ])
     .subscribe(() =>
        this.breakpointChanged() 
      );
  }

  private breakpointChanged() {
    
    if (this.responsive.isMatched(Breakpoints.Small)) {
      this.breakpoint = 1;
      this.ratio = "300px";
    }
    else if (this.responsive.isMatched(Breakpoints.Medium)) {
      this.breakpoint = 2;
      this.ratio = "500px";
    }
    // else if (this.responsive.isMatched(Breakpoints.Medium)) {
    //   this.breakpoint = 4;
    //   this.ratio = "140px";
    // }
    // else if (this.responsive.isMatched(Breakpoints.Large) || this.responsive.isMatched(Breakpoints.XLarge)) {
    //   this.breakpoint = 5;
    //   this.ratio = "120px";
    // }
  }

  ngOnDestroy(): void {
    this.responsive.ngOnDestroy();
  }



  
}
