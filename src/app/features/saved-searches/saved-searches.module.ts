import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatGridListModule} from '@angular/material/grid-list';
import { SavedSearchesComponent } from './components/saved-searches/saved-searches.component';
import { I18TranslateModule } from './../../shared/translate/i18-translate.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [SavedSearchesComponent],
  imports: [
    CommonModule,
    I18TranslateModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class SavedSearchesModule { }
