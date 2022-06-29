import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

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
      this.ratio = "600px";
    }
  }

  ngOnDestroy(): void {
    this.responsive.ngOnDestroy();
  }
}
