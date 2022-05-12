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
        zIndex: '2',
        backgroundColor: 'whitesmoke',
        position: 'fixed',
        height: '100%',
        width: '100%',
        fontSize: '50px',
        marginLeft: '-50px',
        marginTop: '-100px',
        transform: 'translate(0px,50vh)',
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
      'components.header.section2.title',
      'components.header.section4.title',
      'components.footer.section4.title',
      'common.button.search',     
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
