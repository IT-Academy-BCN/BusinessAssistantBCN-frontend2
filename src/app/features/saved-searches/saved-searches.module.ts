import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { SavedSearchesComponent } from './components/saved-searches/saved-searches.component';
import { I18TranslateModule } from './../../shared/translate/i18-translate.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedSearchesDialogComponent } from './components/saved-searches-dialog/saved-searches-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [SavedSearchesComponent, SavedSearchesDialogComponent],
  imports: [
    CommonModule,
    I18TranslateModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatTabsModule
  ]
})
export class SavedSearchesModule { }
