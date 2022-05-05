import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      'Login',
    ]
  }

  
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  
  menuRoute(i: number){
    if(i == 0){
      this.route.navigate(['/les-meves-cerques'])
    }else if(i == 1){
      this.route.navigate(['/directori'])
    }else if(i ==2){
      this.route.navigate(['/qui-som'])
    }else if(i == 3){
      this.route.navigate(['/faqs'])
    }else if(i == 4){
      this.route.navigate(['/legals'])
    }else if(i == 5){
      this.route.navigate(['/login'])
    }
  }

  leftButtonsRoute(i: number){
    if(i == 0){
      this.route.navigate(['/qui-som'])
    }else if(i == 1){
      this.route.navigate(['/faqs'])
    }else if(i == 2){
      this.route.navigate(['/legals'])
    }
  }

  rightButtonsRoute(i: number){
    if(i == 0){
      this.route.navigate(['/login'])
    }
  }



}
