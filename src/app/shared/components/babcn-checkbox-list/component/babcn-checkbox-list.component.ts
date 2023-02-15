import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-babcn-checkbox-list',
  templateUrl: './babcn-checkbox-list.component.html',
})
export class BabcnCheckboxListComponent {

  @Input('checkBoxDataInput') dataInput: any[] = []; // TODO improve typing any[]

  @Input('checkBoxDataShared') dataShared: any[] = []; // TODO improve typing any[]
  zonesSelected: any[] = [];

  checkData(zoneSelected : any , event: any) {   
    if (event) {
      //Adds the selected zone to the array zones  to use it there as parameter
      this.zonesSelected.push(zoneSelected.zoneName);
      console.log(zoneSelected);
    } else {
      //removes the zone 
      this.zonesSelected.splice(this.dataShared.indexOf(zoneSelected), 1);
      console.log(this.zonesSelected);
    }

  }


}
