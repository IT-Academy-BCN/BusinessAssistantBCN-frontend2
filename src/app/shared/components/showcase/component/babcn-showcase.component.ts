import { Component, OnDestroy, OnInit } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'babcn-showcase',
  template: `  
    <!-- MAT-TAB-GROUP -->
    <mat-tab-group color="accent" selectedIndex="0">

        <!-- selectedIndex="0" -->
        <mat-tab label="BABCN-SHOWCASE">
            <tab-showcase [currentBreakpoint]="currentBreakpoint"></tab-showcase>
        </mat-tab>
        <!-- end selectedIndex="0" -->

        <!-- selectedIndex="1" -->
        <mat-tab label="SANDBOX">
            <tab-sandbox></tab-sandbox>
        </mat-tab>
        <!-- end selectedIndex="1" -->

        <!-- selectedIndex="2" -->
        <mat-tab label="BABCN-ACCORDION">
            <tab-babcn-accordion [currentBreakpoint]="currentBreakpoint"></tab-babcn-accordion>
        </mat-tab>
        <!-- end selectedIndex="2" -->

        <!-- selectedIndex="3" -->
        <mat-tab label="BABCN-BUTTONS-CONTAINER">
            <tab-babcn-buttons-container [currentBreakpoint]="currentBreakpoint"></tab-babcn-buttons-container>
        </mat-tab>
        <!-- end selectedIndex="3" -->

        <!-- selectedIndex="4" -->
        <mat-tab label="BABCN-CONTAINER">
            <tab-babcn-container [currentBreakpoint]="currentBreakpoint"></tab-babcn-container>
        </mat-tab>
        <!-- end selectedIndex="4" -->

        <!-- selectedIndex="5" -->
        <mat-tab label="BABCN-LIST">
            <tab-babcn-list [currentBreakpoint]="currentBreakpoint"></tab-babcn-list>
        </mat-tab>
        <!-- end selectedIndex="5" -->

        <!-- selectedIndex="6" -->
        <mat-tab label="BABCN-TREE">
            <tab-babcn-tree [currentBreakpoint]="currentBreakpoint"></tab-babcn-tree>
        </mat-tab>
        <!-- end selectedIndex="6" -->

        <!-- DON'T FORGET UPDATE selectedIndex="" at comments -->
        <!-- DON'T FORGET PUT YOUR COMPONENT INTO TAB "<tab-showcase></tab-showcase>" -->

        

    </mat-tab-group>
    <!-- END MAT-TAB-GROUP -->  
    `
})
export class BabcnShowcaseComponent implements OnInit, OnDestroy {

  currentBreakpoint: string = "";

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.responsive.observe([
      // Breakpoints.Web,
      // Breakpoints.WebLandscape,
      // Breakpoints.WebPortrait,
      // Breakpoints.Tablet,
      // Breakpoints.TabletPortrait,
      // Breakpoints.TabletLandscape,
      // Breakpoints.Handset,
      // Breakpoints.HandsetLandscape,
      // Breakpoints.HandsetPortrait,
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge])
      .subscribe(result => {

        const breakpoints = result.breakpoints;

        // WEB
        // if (breakpoints[Breakpoints.Web]) {
        //     this.currentBreakpoint = Breakpoints.Web;
        // }
        // else if (breakpoints[Breakpoints.WebLandscape]) {
        //     this.currentBreakpoint = Breakpoints.WebLandscape;
        // }
        // else if (breakpoints[Breakpoints.WebPortrait]) {
        //     this.currentBreakpoint = Breakpoints.WebPortrait;
        // }

        // TABLET
        // if (breakpoints[Breakpoints.Tablet]) {
        //     this.currentBreakpoint = Breakpoints.Tablet;
        // }
        // else if (breakpoints[Breakpoints.TabletPortrait]) {
        //     this.currentBreakpoint = Breakpoints.TabletPortrait;
        // }
        // else if (breakpoints[Breakpoints.TabletLandscape]) {
        //     this.currentBreakpoint = Breakpoints.TabletLandscape;
        // }

        // HANDSET
        // if (breakpoints[Breakpoints.Handset]) {
        //     this.currentBreakpoint = Breakpoints.Handset;
        // }
        // else if (breakpoints[Breakpoints.HandsetLandscape]) {
        //     this.currentBreakpoint = Breakpoints.HandsetLandscape;
        // }
        // else if (breakpoints[Breakpoints.HandsetPortrait]) {
        //     this.currentBreakpoint = Breakpoints.HandsetPortrait;
        // }

        // SIZES
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

  ngOnDestroy(): void {
    this.responsive.ngOnDestroy();
  }
}
