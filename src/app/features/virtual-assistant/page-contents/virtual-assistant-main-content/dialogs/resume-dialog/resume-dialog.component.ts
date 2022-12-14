// ANGULAR CORE
import { Component, Inject } from '@angular/core';

// MATERIAL DIALOG DATA
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
  selector: 'dialog-main-resume',
  templateUrl: './resume-dialog.component.html'
})
export class ResumeDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any[],
  ) { }

}
