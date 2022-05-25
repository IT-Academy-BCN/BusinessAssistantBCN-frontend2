import { Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { Indent } from './microcomponent/code-enum';
import { Code } from './microcomponent/code-interface';
import { StyleCode } from './microcomponent/code-style';


@Component({
  selector: 'tab-babcn-accordion',
  templateUrl: './tab-babcn-accordion.component.html',
  styleUrls: ['./microcomponent/code-style.scss']
})
export class TabBabcnAccordionComponent {

  @Input('currentBreakpoint') currentBreakpoint: string = "";

  get breakpoint(): number {
    if (this.currentBreakpoint == Breakpoints.XSmall
      || this.currentBreakpoint == Breakpoints.Small) {
      return 1;
    } else if (
      this.currentBreakpoint == Breakpoints.Medium
      || this.currentBreakpoint == Breakpoints.Large
      || this.currentBreakpoint == Breakpoints.XLarge) {
      return 2;
    }
    return 0;
  }

  showWord: string = "Hello!";

  mainSelectorComponent: string = "babcn-accordion";

  case1: Code = {
    title: 'Case 1',
    subtitle: `Basic <b>${this.mainSelectorComponent}</b> with INPUT and OUTPUT`,
    show: [
      StyleCode.comment(this.mainSelectorComponent),
      StyleCode.open(Indent.NOINDENT, this.mainSelectorComponent, Indent.INDENT1,
        ["[accordionDataInput]", '"myDataSource"'],
        ["(accordionDataOutput)", '"myGetDataFromAccordion($event)"']
      ),
      StyleCode.close(Indent.NOINDENT, this.mainSelectorComponent),
      StyleCode.comment(this.mainSelectorComponent, true)

    ],
    copy: [
      `${StyleCode.copyComment(this.mainSelectorComponent)}`,
      `\n<${this.mainSelectorComponent}`,
      `\n\t[accordionDataInput]="myDataSource"`,
      `\n\t(accordionDataOutput)="myGetDataFromAccordion($event)">`,
      `\n</${this.mainSelectorComponent}>`,
      `\n${StyleCode.copyComment(this.mainSelectorComponent, true)}`
    ]
  }

  dataShared: any[] = []

  dataSource: any[] = [
    {
      title: 'LOREM I',
      subcategory: [
        {
          title: 'Lorem 1',
          items: [
            { item: 'lorem a' },
            { item: 'lorem b' },
            { item: 'lorem c' }
          ]
        },
        {
          title: 'Lorem 2',
          items: [
            { item: 'lorem a' },
            { item: 'lorem b' },
            { item: 'lorem c' }
          ]
        }
      ]
    },
    {
      title: 'LOREM II',
      subcategory: [
        {
          title: 'Lorem 1',
          items: [
            { item: 'lorem a' },
            { item: 'lorem b' },
            { item: 'lorem c' }
          ]
        },
        {
          title: 'Lorem 2',
          items: [
            { item: 'lorem a' },
            { item: 'lorem b' },
            { item: 'lorem c' }
          ]
        }
      ]
    },
    {
      title: 'LOREM III',
      subcategory: [
        {
          title: 'Lorem 1',
          items: [
            { item: 'lorem a' },
            { item: 'lorem b' },
            { item: 'lorem c' }
          ]
        },
        {
          title: 'Lorem 2',
          items: [
            { item: 'lorem a' },
            { item: 'lorem b' },
            { item: 'lorem c' }
          ]
        }
      ]
    }

  ]

  getDataFromAccordion(accordionData: any[]) {
    this.dataShared = [...accordionData];
  }

  constructor() { }

}
