import { Injectable } from '@angular/core';
import { VaSelections, VaSelected } from '../models/virtual-assistant.model';

@Injectable({
  providedIn: 'root'
})
export class VirtualAssistantSelectionsService {

  public selections: VaSelections ={userID:0, content: []};

  setSelections(selectedData:string[]) {
    //In the future the userID will be obtained from Login or from antoher means to get userID
    this.selections.userID=1;
    let selections_content: VaSelected[] = [];
    selectedData.forEach((item,index) => {
      //Now ID is being looped, but in the future ID's may need to be matched against a list of Id's set up in the back-end; 
      selections_content.push({id: index, content: item});
    })
    this.selections.content = selections_content;
  }
}
