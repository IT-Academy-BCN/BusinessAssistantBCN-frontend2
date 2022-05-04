// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// DIRECTIVE: OBSERVER-INTERSECTION
import { ObserverIntersectionDirective } from './directives/observer-interceptor.directive';


@NgModule({
  declarations: [
    ObserverIntersectionDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ObserverIntersectionDirective
  ]
})
export class SharedModule { }
