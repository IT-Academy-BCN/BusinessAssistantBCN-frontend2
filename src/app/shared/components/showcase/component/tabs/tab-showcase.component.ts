import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'tab-showcase',
  templateUrl: './tab-showcase.component.html',
  styleUrls: ['./microcomponent/code-style.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabShowcaseComponent {

  @Input('currentBreakpoint') currentBreakpoint: string = "";

  get breakpoint(): number {
    if (this.currentBreakpoint == Breakpoints.XSmall ||
      this.currentBreakpoint == Breakpoints.Small
    ) {
      return 1;
    } else if (this.currentBreakpoint == Breakpoints.Medium) {
      return 2;
    } else if (this.currentBreakpoint == Breakpoints.Large) {
      return 3;
    } else if (this.currentBreakpoint == Breakpoints.XLarge) {
      return 4;
    }
    return 0;
  }

  get ratio(): string {
    switch (this.currentBreakpoint) {
      case Breakpoints.XSmall:
        return "420px";
      case Breakpoints.Small:
        return "440px";
      case Breakpoints.Medium:
        return "460px";
      case Breakpoints.Large:
        return "480px";
      case Breakpoints.XLarge:
        return "500px";
      default:
        return "520px";
    }
  }

  // for va-accordion
  accordionData: any[] = [
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

  // for va-buttons-container

  buttonsContainerWord: string = "Hello!";

  onHelloButtonClick = () => {
    this.buttonsContainerWord = "You say: Hello!";
  }

  onByeButtonClick = () => {
    this.buttonsContainerWord = "You say: Bye!";
  }

  // for va-list
  listData: string[] = [
    "Lorem 1",
    "Lorem 2",
    "Lorem 3",
    "Lorem 4",
    "Lorem 5"
  ];

  // for va-tree
  treeData = {
    Groceries: {
      'Almond Meal flour': null,
      'Organic eggs': null,
      'Protein Powder': null,
      Fruits: {
        Apple: null,
        Berries: ['Blueberry', 'Raspberry'],
        Orange: null,
      },
    },
    Reminders: ['Cook dinner', 'Read the Material Design spec', 'Upgrade Application to Angular'],
  };

  constructor() {
  }

}
