import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  currentBreakpoint: string = "";

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(): void {

    this.responsive.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge])
      .subscribe(result => {

        const breakpoints = result.breakpoints;

        //SIZES
        if (breakpoints[Breakpoints.XSmall]) {
          this.currentBreakpoint = Breakpoints.XSmall;
        }
        else if (breakpoints[Breakpoints.Small]) {
          this.currentBreakpoint = Breakpoints.Small;
        }
        else if (breakpoints[Breakpoints.Medium]) {
          this.currentBreakpoint = Breakpoints.Medium;
        }
        else if (breakpoints[Breakpoints.Large]) {
          this.currentBreakpoint = Breakpoints.Large;
        }
        else if (breakpoints[Breakpoints.XLarge]) {
          this.currentBreakpoint = Breakpoints.XLarge;
        }
      });
  }

  //Number of cols
  get breakpoint(): number { 
    if (this.currentBreakpoint == Breakpoints.XSmall) {
      return 1;
    } else if (this.currentBreakpoint == Breakpoints.Small) {
      return 2;
    } else if (this.currentBreakpoint == Breakpoints.Medium) {
      return 4;
    } else if (this.currentBreakpoint == Breakpoints.Large || this.currentBreakpoint == Breakpoints.XLarge){
      return 5;
    }
    return 0;
  }

  //Cols height
  get ratio(): string {
    switch (this.currentBreakpoint) {
      case Breakpoints.XSmall:
        return "110px";
      case Breakpoints.Small:
        return "130px";
      case Breakpoints.Medium:
        return "130px";
      case Breakpoints.Large:
        return "140px";
      case Breakpoints.XLarge:
        return "40px";
      default:
        return "70px";
    }
  }

  ngOnDestroy(): void {
    this.responsive.ngOnDestroy();
  }
}
