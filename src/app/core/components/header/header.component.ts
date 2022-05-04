import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  buttons = {
    menu: [
      'Les meves cerques',
      'Directori',
      'Qui som',
      'FAQs',
      'Legals',
      'Logout',
    ],
    start: [
      'Qui som',
      'FAQs',
      'Legals',
    ],
    middle: [
      'CA',
      'ES',
      'EN',
    ],
    end: [
      'Login'
    ]
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
