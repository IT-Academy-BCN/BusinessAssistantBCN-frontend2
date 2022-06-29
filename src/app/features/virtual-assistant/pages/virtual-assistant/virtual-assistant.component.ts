
// ANGULAR CORE
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';

// MATERIAL
import { MatDialog } from '@angular/material/dialog';

// VIRTUAL-ASSISTANT MODELS - BUSINESS ASISSTANT CATEGORY
import { Category } from '../../models/business-assistant.model';


// RESUME-DIALOG-COMPONENT


@Component({
  selector: 'app-virtual-assistant',
  templateUrl: './virtual-assistant.component.html',
  styleUrls: ['./virtual-assistant.component.scss']
})
export class VirtualAssistantComponent implements OnInit {

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


}
