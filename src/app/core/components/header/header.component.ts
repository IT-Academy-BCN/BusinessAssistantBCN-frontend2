import { Component, OnInit } from '@angular/core';
import { trigger,state, style, animate, transition } from "@angular/animations";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('aniTitle', [
      state('inactive', style({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })),
      state('active', style({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '3',
        backgroundColor: 'whitesmoke',
        height: '100vh',
        width: '50vw',
        fontSize: '50px',
        transform: 'translate(50vh,50vh)',
        transformOrigin: 'center'
        
      })),
      transition('inactive => active', animate('1s ease-in')),
      transition('active => inactive', animate('1s ease')),
    ])
  ]
})
export class HeaderComponent implements OnInit {

  buttons = {
    navigate: [
      // 'components.header.section2.title',
      'Qui som',
      // 'components.header.section4.title',
      'FAQs',
      // 'components.footer.section4.title',
      'Legal',
      'Search'
    ],
    language: [
      'CA',
      'ES',
      'EN',
    ]
  }

  title: string = 'inactive'

  
  constructor() { }

  ngOnInit(): void {
  }

  toggleTitle(){
    this.title = this.title === 'inactive' ? 'active' : 'inactive'
  }



}
