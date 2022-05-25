// ANGULAR CORE
import { Component, Input } from '@angular/core';


@Component({
  selector: 'babcn-list',
  templateUrl: './babcn-list.component.html'
})
export class BabcnListComponent {
  
  // Data to show in ul > li {{ info | translate }}.
  @Input('listDataInput') dataInput: any[] = []; // TODO improve typing any[]

  // Not delete this empty constructor to make implementations easier to understand.
  constructor() { }
}
