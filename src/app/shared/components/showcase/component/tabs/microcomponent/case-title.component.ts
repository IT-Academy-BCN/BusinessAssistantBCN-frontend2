import { Component, Input } from '@angular/core';

@Component({
    selector: 'showcase-case-title',
    template: `
  <p class="mat-display-1" style="margin: 10px 50px">{{ titleCase }}
      <span class="mat-subheading-2" [innerHTML]="innerHtmlSubtitle"></span>
  </p>
  `
})
export class CaseTitleComponent {

    @Input('title') titleCase: string = "";

    @Input('innerHtmlSubtitle') innerHtmlSubtitle: string = "";
}