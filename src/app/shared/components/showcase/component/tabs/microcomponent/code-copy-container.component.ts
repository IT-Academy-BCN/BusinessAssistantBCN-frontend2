import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Code } from './code-interface';
import {
  MatLegacySnackBar as MatSnackBar,
  MatLegacySnackBarHorizontalPosition as MatSnackBarHorizontalPosition,
  MatLegacySnackBarVerticalPosition as MatSnackBarVerticalPosition,
} from '@angular/material/legacy-snack-bar';


@Component({
  selector: 'showcase-code-copy-container',
  template: `
    <babcn-container containerWidth="100%" containerHeight="100%" containerInnerPadding="20px 10px"
        containerBackgroundColor="#222" [containerElevationInactive]=6 [containerElevationActive]=12 [containerIsActive]="isActive">
        <div class="container">
          <div *ngFor="let item of code.show" [innerHtml]="item"></div>
          <button mat-stroked-button class="btncopy" color="accent" (mouseover)="isActive = true" (mouseout)="isActive=false"[cdkCopyToClipboard]="code.copy.join('')" (click)="openSnackBar()">Copy to clipboard</button>
        </div>
    </babcn-container>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
    }
    .btncopy {
      margin-top: 10px;
    }
  `],
  encapsulation: ViewEncapsulation.None,
})
export class CodeCopyContainerComponent {

  @Input('code') code: Code = {
    title: '',
    subtitle: '',
    show: [],
    copy: []
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';

  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar() {
    this._snackBar.open(`${this.code.title} copied`, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 1000
    });
  }

  isActive: boolean = false;
  onMouseOver() {
    this.isActive = !this.isActive;
  }

}
