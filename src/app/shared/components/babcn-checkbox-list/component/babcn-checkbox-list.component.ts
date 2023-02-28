import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-babcn-checkbox-list',
  templateUrl: './babcn-checkbox-list.component.html',
})
export class BabcnCheckboxListComponent {

  @Input('checkBoxDataInput') dataInput: any[] = []; // TODO improve typing any[]

  @Output('checkBoxDataShared') dataOutput: EventEmitter<string[]> = new EventEmitter<string[]>(); 
  
  checkedData: any[] = [];

  checkData(data : any , event: boolean) {   
    if (event) {
      //Adds the selected zone to the array zones  to use it there as parameter
      this.checkedData.push(data);
    } else {
      //removes the zone 
      this.checkedData.splice(this.checkedData.indexOf(data), 1);
    }

    this.dataOutput.emit(this.checkedData.flatMap((item) => item.zoneName));

  }


}
