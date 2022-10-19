// ANGULAR CORE
import { Component, Input } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'babcn-title',
  templateUrl: './babcn-title.component.html',
  styleUrls: ['./babcn-title.component.scss']
})
export class BabcnTitleComponent {

  // Dato tho show
  @Input('titleInput') titleInput: string = '';

  // Not delete this empty constructor to make implementations easier to understand.
  constructor(private translate: TranslateService) { }
}
