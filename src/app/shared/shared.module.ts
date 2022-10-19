// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

// DIRECTIVE: OBSERVER-INTERSECTION
import { ObserverIntersectionDirective } from './directives/observer-interceptor.directive';


@NgModule({
  declarations: [
    ObserverIntersectionDirective
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    ObserverIntersectionDirective,
    TranslateModule
  ]
})
export class SharedModule { }
