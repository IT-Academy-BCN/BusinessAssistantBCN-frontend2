import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
//import { Breakpoints } from '@angular/cdk/layout';
import { BreakpointService } from 'src/app/services/shared/breakpoint/breakpoint.service';
import { FOOTER_MAT_GRID_LIST } from '../../../shared/components/component-constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {

  breakpoint: number | string = 0;
  ratio: string | number = "";

  constructor(private size_observer: BreakpointService) { }

  ngOnChange() { 
    this.size_observer.breakpoint$.subscribe((res) => {
      console.log(res);
      //this.breakpointChanged(res);
      FOOTER_MAT_GRID_LIST.forEach((value, key) => {
        if (key == res) {
          this.breakpoint = value[0];
          this.ratio = value[1];
          console.log(this.breakpoint, this.ratio);
        }
      });
      //this.ngOnInit();
    });
  };

 ngOnInit(): void {

    this.size_observer.breakpoint$.subscribe((res) => {
      console.log(res);
      //this.breakpointChanged(res);
      FOOTER_MAT_GRID_LIST.forEach((value, key) => {
        if (key == res) {
          this.breakpoint = value[0];
          this.ratio = value[1];
          console.log(this.breakpoint, this.ratio);
        }
      });
    });
   // this.ngOnChange(); 
    //this.ngAfterViewInit();
    
  }
  

  ngAfterViewInit() { 
    this.size_observer.breakpoint$.subscribe((res) => { 
      console.log(res);   
      //this.breakpointChanged(res);
      FOOTER_MAT_GRID_LIST.forEach((value, key) => {
        if (key == res) { 
          this.breakpoint = value[0];
          this.ratio = value[1];
          console.log(this.breakpoint, this.ratio);
        }
      });
    })
  }
  ngAfterViewChecked() { 
    this.size_observer.breakpoint$.subscribe((res) => { 
      console.log(res);   
      //this.breakpointChanged(res);
      FOOTER_MAT_GRID_LIST.forEach((value, key) => {
        if (key == res) { 
          this.breakpoint = value[0];
          this.ratio = value[1];
          console.log(this.breakpoint, this.ratio);
        }
      });
    })
  }



  

  /* private breakpointChanged(res: string) {
    console.log("this is the: " + res);  
  }  */

  /* ngOnDestroy(): void {
    this.size_observer.breakpoint$.;
  } */
}
