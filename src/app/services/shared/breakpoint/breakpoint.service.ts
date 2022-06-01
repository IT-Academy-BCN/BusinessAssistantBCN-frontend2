// ANGULAR CORE
import { Injectable } from '@angular/core';

// ANGULAR CDK BREAKPOINT-OBSERVER
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

// RXJS
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  // destroyed = new Subject<void>();
  // currentScreenSize: string = "";

  private _breakpoint$: Subject<string> = new Subject();

  // Create a map to display breakpoint names for demonstration purposes.
  private displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  get breakpoint$(): Observable<string> {
    return this._breakpoint$.asObservable();
  }

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            const currentScreenSize: string = this.displayNameMap.get(query) ?? 'Unknown';
            this._breakpoint$.next(currentScreenSize);
          }
        }
      });
  }

}
