import { Component, Input } from '@angular/core';

@Component({
    selector: 'showcase-case-title',
    template: `
  <p class="mat-headline-4" style="margin: 10px 50px">{{ titleCase }}
      <span class="mat-subtitle-1" [innerHTML]="innerHtmlSubtitle"></span>
  </p>
  `
})
export class CaseTitleComponent {

    @Input('title') titleCase: string = "";

    @Input('innerHtmlSubtitle') innerHtmlSubtitle: string = "";
}