/**
 * @author Alissia Frolova
 * @author Ramon Ferrer
 */
import { Component, OnInit } from '@angular/core';

import { BreakpointService } from 'src/app/shared/services/breakpoint/breakpoint.service';
import { FOOTER_MAT_GRID_LIST } from '../../../shared/components/component-constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
  
export class FooterComponent implements OnInit {

  breakpoint: number | string | "Unknown" = 0;
  ratio: string | number = "";

  constructor(private size_observer: BreakpointService) {
    const value = FOOTER_MAT_GRID_LIST.get(this.size_observer.getCurrentScreenSize());
    if (value != undefined) {
      this.breakpoint = value[0];
      this.ratio = value[1];
    } else {
      this.breakpoint = 0;
      this.ratio = "150px";
    }
  }

  ngOnInit(): void {
  this.size_observer.breakpoint$.subscribe((res) => {
      FOOTER_MAT_GRID_LIST.forEach((value, key) => {
        if (key == res) {
          this.breakpoint = value[0];
          this.ratio = value[1];
        }
      });
    });
  }
}

  
