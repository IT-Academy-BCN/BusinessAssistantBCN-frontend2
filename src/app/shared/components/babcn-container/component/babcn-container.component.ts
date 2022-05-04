// ANGULAR CORE
import { Component } from '@angular/core';

// SUPER - BASE-CONTAINER-COMPONENT
import { BabcnBaseContainerComponent } from '../../super/babcn-base-container.component';


@Component({
  selector: 'babcn-container',
  templateUrl: './babcn-container.component.html',
  styleUrls: ['./babcn-container.component.scss']
})
export class BabcnContainerComponent extends BabcnBaseContainerComponent {

  constructor() {
    //BabcnBaseContainerComponent constructor() as super().
    super();
  }

}
