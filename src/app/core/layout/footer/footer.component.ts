import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Component, OnInit, OnDestroy } from '@angular/core';

//import { Breakpoints } from '@angular/cdk/layout';
import { BreakpointService } from 'src/app/services/shared/breakpoint/breakpoint.service';
import { FOOTER_MAT_GRID_LIST } from '../../../shared/components/component-constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

  
export class FooterComponent implements OnInit, OnDestroy {

  breakpoint: number | string | "Unknown" = 2;
  ratio: string | number = "110";
  breakPoints:(string | number)[] | undefined = FOOTER_MAT_GRID_LIST.get("Breakpoints.XSmall");

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

  private breakpointChanged()
  {

   

    /* FOOTER_MAT_GRID_LIST.forEach(key => {
      if (this.responsive.isMatched(key.toString())) {
        this.arr = FOOTER_MAT_GRID_LIST.get(key.toString());
        console.log(this.arr);
   
        
        const currentScreenSize: (string | number)[] | "Unknown" = FOOTER_MAT_GRID_LIST.get(key.toString()) ?? 'Unknown';
        this.breakpoint = this.arr[0] ?? 'Unknown';
        this.ratio = this.arr[1]; 
          console.log(currentScreenSize);
        }
      }); */

    /* for (const query of Object.keys(this.responsive.isMatched)) {
          if (this.responsive.isMatched(query)) {
            const currentScreenSize: (string | number)[] | "Unknown" = FOOTER_MAT_GRID_LIST.get(query) ?? 'Unknown';
            this.breakpoint = currentScreenSize[0];
            this.ratio = currentScreenSize[1];
        }
      } */
    
    if (this.responsive.isMatched(Breakpoints.XSmall)) {
      this.breakpoint = 1;
      this.ratio = "110px";
     /*  this.breakPoints = FOOTER_MAT_GRID_LIST.get("Breakpoints.XSmall") || undefined; */
      console.log(this.breakPoints);
    }
    else if (this.responsive.isMatched(Breakpoints.Small)) {
      this.breakpoint = 2;
      this.ratio = "130px";
      /* this.breakPoints = FOOTER_MAT_GRID_LIST.get("Breakpoints.Small") || undefined; */
    }
    else if (this.responsive.isMatched(Breakpoints.Medium)) {
      this.breakpoint = 4;
      this.ratio = "140px";
      /* this.breakPoints = FOOTER_MAT_GRID_LIST.get("Breakpoints.Medium") || undefined; */
    }
    else if (this.responsive.isMatched(Breakpoints.Large) || this.responsive.isMatched(Breakpoints.XLarge)) {
      this.breakpoint = 5;
      this.ratio = "120px";
      /* this.breakPoints = FOOTER_MAT_GRID_LIST.get("Breakpoints.Large"); */
    }
  }

  ngOnDestroy(): void {
    this.responsive.ngOnDestroy();
  }
}
  
