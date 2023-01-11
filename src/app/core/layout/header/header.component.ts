import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointService } from 'src/app/services/shared/breakpoint/breakpoint.service';
import { zoomTitle } from './animation/header.animation';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  animations: [
    zoomTitle
  ]
})
export class HeaderComponent implements OnInit {

  buttons: {name: string, link: string}[] =  [
    {name: 'common.button.search', link: ''},
    {name: 'components.header.section2.title', link: ''},
    {name: 'components.header.section4.title', link: ''},
    {name: 'components.footer.section4.title', link: ''},
    {name: 'common.button.login', link: 'login'},
  ]

  title: string = 'inactive'
  menu: boolean = false


  constructor(
    private responsive: BreakpointService,
    private router: Router
  ) {
    const currentScreenSize = this.responsive.getCurrentScreenSize();
    this.expandMenu(currentScreenSize);
  }

  ngOnInit(): void {
    this.responsive.breakpoint$.subscribe(result => {
      this.expandMenu(result);
    })
  }

  private expandMenu(currentScreenSize: string) {
    if (currentScreenSize == 'Small' || currentScreenSize == 'XSmall') {
      this.menu = true;
    } else {
      this.menu = false;
    }
  }

  toggleTitle() {
    // animacion deshabilitada de cara a la presentación del 28/07/2022
    // para volver a habilitar la animacion, desenmudecer la siguiente sentencia:
     this.title = this.title === 'inactive' ? 'active' : 'inactive';
  }

  goToLink(num: number) {
  this.router.navigate([this.buttons[num].link])
  }
 
}
