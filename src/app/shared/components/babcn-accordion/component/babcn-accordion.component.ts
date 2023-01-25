// ANGULAR CORE
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/features/virtual-assistant/models/business-assistant.model';


@Component({
  selector: 'babcn-accordion',
  templateUrl: './babcn-accordion.component.html',
  styleUrls: ['./babcn-accordion.component.scss']
})
export class BabcnAccordionComponent {

  // Data source. Is the object to be displayed in the material-accordion.
  @Input('accordionDataInput') dataInput: Category[] = []; // TODO improve typing any[]

  // Component Data Output.
  @Output('accordionDataOutput') dataOutput: EventEmitter<string[]> = new EventEmitter<string[]>(); // TODO improve typing any[]

  // Data shared by this component.
  dataSend: string[] = []; // TODO improve typing any[]

  // Numerical representation of the item index.
  itemAccordion: number = 0;

  // Item display status in material-accordion.
  isItemOpen: boolean = false;

  // Not delete this empty constructor to make implementations easier to understand.
  constructor() { }

  /**
   * Display (open and close) the items in the material-accordion.
   * @param itemTitle title displayed in item-material-accordion.
   */
  onClickItems(itemTitle: number) {
    if (this.itemAccordion != itemTitle)
      this.isItemOpen = true;
    else
      this.isItemOpen = !this.isItemOpen;

    this.itemAccordion = itemTitle;
  }

  /**
   * Save the item when you click. Output emit 'dataSend'.
   * @param itemToSave Item of the material-accordion to be stored and shared from output.
   */
  onClickItemSaveData(itemToSave: string) {
    if (!this.dataSend.includes(itemToSave)) {
      this.dataSend.push(itemToSave);
      this.dataOutput.emit(this.dataSend);
    }
  }
}
