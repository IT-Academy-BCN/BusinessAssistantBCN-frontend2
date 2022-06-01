import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  breakpoint: number = 0;
  ratio: string = "";

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(): void {

    this.responsive.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge])
     .subscribe(() =>
        this.breakpointChanged() 
      );
  }

  private breakpointChanged() {
    
    if (this.responsive.isMatched(Breakpoints.XSmall)) {
      this.breakpoint = 1;
      this.ratio = "110px";
    }
    else if (this.responsive.isMatched(Breakpoints.Small)) {
      this.breakpoint = 2;
      this.ratio = "130px";
    }
    else if (this.responsive.isMatched(Breakpoints.Medium)) {
      this.breakpoint = 4;
      this.ratio = "140px";
    }
    else if (this.responsive.isMatched(Breakpoints.Large) || this.responsive.isMatched(Breakpoints.XLarge)) {
      this.breakpoint = 5;
      this.ratio = "120px";
    }
  }

  ngOnDestroy(): void {
    this.responsive.ngOnDestroy();
  }
}
