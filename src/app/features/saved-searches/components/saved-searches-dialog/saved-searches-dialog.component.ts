import { SavedSearchesService } from './../../services/saved-searches.service';
import { Router } from '@angular/router';
import { SavedSearchesModel } from 'src/app/shared/models/saved-search.model';
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
  savedSearchesModel!: SavedSearchesModel;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { results: SearchItemResult[] },
    private SavedSearchesSvc: SavedSearchesService,
    private router: Router,
    fb: FormBuilder) {

    this.form = fb.group({
      name: ['', Validators.required],
      detail: ['', Validators.required]
    });

  }
  onSubmit() {
    const search_uuid = 12345;
    const user_uuid = 21222;
    const search_date = new Date();
    const search_name = this.form.value.name;
    const search_detail = this.form.value.detail;
    const search_result = this.data.results;
    this.savedSearchesModel = new SavedSearchesModel(search_uuid, user_uuid, search_name, search_detail, search_date, search_result);
    console.log(this.savedSearchesModel);
    this.router.navigate(['saved-searches']);
  }

}
