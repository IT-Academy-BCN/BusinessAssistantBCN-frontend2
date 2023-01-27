import { SearchItemResult } from './../../../../shared/models/my-environment-search/search-item-result.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-saved-searches-dialog',
  templateUrl: './saved-searches-dialog.component.html',
  styleUrls: ['./saved-searches-dialog.component.scss']
})
export class SavedSearchesDialogComponent {
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { results: SearchItemResult[] },
    fb: FormBuilder) {

    this.form = fb.group({
      name: ['', Validators.required],
      detail: ['', Validators.required]
    });

  }
  onSubmit() {
    console.log(this.data.results);
  }

}
