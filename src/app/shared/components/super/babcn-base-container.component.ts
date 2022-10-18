// ANGULAR CORE
import { Component, Input, OnInit } from '@angular/core';

// COLOR-TOOLS
import { isHexadecimal } from '../tools/color-tools';


@Component({
  selector: 'babcn-base-container',
  template: '',
})
export class BabcnBaseContainerComponent implements OnInit {

  // Main div container '.component-container'
  @Input('containerWidth') containerWidth: string;
  @Input('containerHeight') containerHeight: string;
  @Input('containerBackgroundColor') containerBackgroundColor: string;
  @Input('containerElevationInactive') containerElevationInactive: number;
  @Input('containerElevationActive') containerElevationActive: number;

  // Inner div container '.content-container'
  @Input('containerInnerPadding') containerInnerPadding: string;

  // Settings 
  @Input('containerIsActive') containerIsActive: boolean;

  // Style: auto sets configurations
  @Input('vaStyle') lookAndFeel: string;

  // Default values of inputs.
  constructor() {
    this.containerWidth = "100%";
    this.containerHeight = "";
    this.containerInnerPadding = "";
    this.containerBackgroundColor = "";
    this.containerElevationInactive = 0;
    this.containerElevationActive = 0;
    this.containerIsActive = false;
    this.lookAndFeel = "";
  }

  ngOnInit(): void {
    this.styling();
  }

  /** Get a theme with only a word! */
  private styling() {
    if (this.lookAndFeel !== "") {
      switch (this.lookAndFeel) {

        case "theme":
          if (this.containerInnerPadding === "") { this.containerInnerPadding = "15px"; }
          if (this.containerBackgroundColor === "") { this.containerBackgroundColor = "white"; }
          if (this.containerElevationInactive == 0) { this.containerElevationInactive = 2; }
          if (this.containerElevationActive == 0) { this.containerElevationActive = 4; }
          break;

        case "transparent":
          this.containerInnerPadding = "0px";
          this.containerBackgroundColor = "transparent";
          this.containerElevationInactive = 0;
          this.containerElevationActive = 0;
          this.containerIsActive = false;
          break;
      }
    }
  }

  /** Returns the width of the main div 'component-container'. */
  get getContainerWidth(): string {
    return this.containerWidth;
  }

  /** Returns the height of the main div 'component-container'. */
  get getContainerHeight(): string {
    return this.containerHeight;
  }

  /** Returns the background color of the main div 'component-container'. */
  get getContainerBackgroundColor(): string {
    if (this.containerBackgroundColor === "") { return "transparent"; }

    if (isHexadecimal(this.containerBackgroundColor))
      return `#${this.containerBackgroundColor}`;
    else
      return this.containerBackgroundColor;
  }

}
