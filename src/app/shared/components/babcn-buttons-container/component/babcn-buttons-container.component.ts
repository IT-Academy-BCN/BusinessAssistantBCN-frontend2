// ANGULAR CORE
import { Component, Input } from '@angular/core';

// SUPER - BASE-CONTAINER-COMPONENT
import { BabcnBaseContainerComponent } from '../../super/babcn-base-container.component';

// COLOR-TOOLS
import { isHexadecimal } from '../../tools/color-tools';


@Component({
  selector: 'babcn-buttons-container',
  templateUrl: './babcn-buttons-container.component.html',
  styleUrls: ['./babcn-buttons-container.component.scss']
})
export class BabcnButtonsContainerComponent extends BabcnBaseContainerComponent {

  // Buttons container '.buttons-container'
  @Input('buttonsContainerBackgroundColor') buttonsContainerBackgroundColor: string;
  @Input('buttonsContainerGap') buttonsContainerGap: string;
  @Input('buttonsContainerPadding') buttonsContainerPadding: string;
  @Input('buttonsContainerFlow') buttonsContainerFlow: string;
  @Input('buttonsContainerPosition') buttonsContainerPosition: string;

  // About buttons
  @Input('buttonsContainerTotalButtons') buttonsContainerTotalButtons: number;

  // Main Button
  @Input('mainButtonText') mainButtonText: string;
  @Input('mainButtonColor') mainButtonColor: string;
  @Input('mainButtonFunction') mainButtonFunction!: () => void;
  @Input('mainButtonDisabled') mainButtonDisabled: boolean;

  // Secondary Button
  @Input('secondaryButtonText') secondaryButtonText: string;
  @Input('secondaryButtonColor') secondaryButtonColor: string;
  @Input('secondaryButtonFunction') secondaryButtonFunction!: () => void;
  @Input('secondaryButtonDisabled') secondaryButtonDisabled: boolean;

  // Extra Button
  @Input('extraButtonText') extraButtonText: string;
  @Input('extraButtonColor') extraButtonColor: string;
  @Input('extraButtonFunction') extraButtonFunction!: () => void;
  @Input('extraButtonDisabled') extraButtonDisabled: boolean;

  constructor() {
    // BaseContainerComponent constructor() as super()
    super();

    this.containerBackgroundColor = "white";

    // Buttons container '.buttons-container'
    this.buttonsContainerBackgroundColor = "white";
    this.buttonsContainerGap = "15px";
    this.buttonsContainerPadding = "15px";

    this.buttonsContainerFlow = "reverse";
    this.buttonsContainerPosition = "start";
    this.buttonsContainerTotalButtons = 2;

    // Main Button
    this.mainButtonText = "Main Button";
    this.mainButtonColor = "primary";
    this.mainButtonDisabled = false;

    // Secondary Button
    this.secondaryButtonText = "Secondary Button";
    this.secondaryButtonColor = "";
    this.secondaryButtonDisabled = false;

    // Extra Button
    this.extraButtonText = "Extra Button";
    this.extraButtonColor = "";
    this.extraButtonDisabled = false;
  }

  /** Returns true if 'hexadecimalValue' is a hexadecimal. */
  // private isHexadecimal = (hexadecimalValue: string) => /^[0-9A-F]+$/ig.test(hexadecimalValue);

  /** Returns the background color of the buttons-container div '.buttons-container'. */
  get getButtonsContainerBackgroundColor(): string {
    if (isHexadecimal(this.buttonsContainerBackgroundColor))
      return `#${this.buttonsContainerBackgroundColor}`;
    else
      return this.buttonsContainerBackgroundColor;
  }

  /** Returns the gap of the buttons-container div '.buttons-container'. */
  get getButtonsContainerGap(): string {
    return this.buttonsContainerGap;
  }

  /** Returns the padding of the buttons-container div '.buttons-container'. */
  get getButtonsContainerPadding(): string {
    return this.buttonsContainerPadding;
  }

  //** Returns a matrix with the used classes by '.buttons-container'. */
  get getButtonsClassPosition(): string[] {
    let buttonsFlow = "";
    let buttonsPosition = "";

    switch (this.buttonsContainerFlow) {
      case "row":
        buttonsFlow = "buttons-container";
        break;
      case "reverse":
        buttonsFlow = "buttons-container-reverse";
        break;
    }

    switch (this.buttonsContainerPosition) {
      case "end":
        buttonsPosition = "buttons-flex-end";
        break;
      case "start":
        buttonsPosition = "buttons-flex-start";
        break;
      case "center":
        buttonsPosition = "buttons-flex-center";
        break;
      case "around":
        buttonsPosition = "buttons-flex-around";
        break;
      case "between":
        buttonsPosition = "buttons-flex-between";
        break;
    }

    return [buttonsFlow, buttonsPosition];
  }

  /** On main button click (located on the right side of the container). */
  onMainButtonClick() {
    if (typeof this.mainButtonFunction === 'function')
      this.mainButtonFunction();
  }

  /** On secondary button click (located on the left side of the container). */
  onSecondaryButtonClick() {
    if (typeof this.secondaryButtonFunction === 'function')
      this.secondaryButtonFunction();
  }

  //** On extra button click. */
  onExtraButtonClick() {
    if (typeof this.extraButtonFunction === 'function')
      this.extraButtonFunction();
  }
}
