import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LanguagesModel } from '../language-changer/language-changer.interface';
import { Router } from '@angular/router';
import { LoginModalComponent } from 'src/app/features/users/components/login-modal/login-modal.component';
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

  buttons: string[] =  [
    'common.button.assistant',
    'common.button.my-enviroment',
    /* 'components.header.section2.title',
    'components.header.section4.title',
    'components.footer.section4.title', */
    'common.button.search',
    'common.button.login',
  ]

  userMenuButtons: string[] = [
    'components.header.section5.title',
    'common.button.logout'
  ]

  languageButtons: {text: string, lang: LanguagesModel}[] = [
    {text: 'CA', lang: LanguagesModel.ca },
    {text: 'ES', lang: LanguagesModel.es },
    {text: 'EN', lang: LanguagesModel.en }
  ]

  environmentButtons: string[] = [
    'common.button.mall',
    'common.button.gallery-market',
    'common.button.big-stablish',
    'common.button.market-fair',
    'common.button.public-market',
  ];

  title: string = 'inactive'
  menu: boolean = false

  // user.name solo para fines visuales (muestra menú si existe), esperando respuesta de login para definir 'user' correctamente.
  user = { 
    name : '',
    // name : 'Jhon Doe'
  }

  constructor(
    public  dialog     : MatDialog,
    private responsive : BreakpointService,
    private router     : Router,
    private translateService:TranslateService,
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
    switch (num) {
      case 0:
        this.router.navigate(['virtual-assistant']);
        break;
      case 1:
        this.router.navigate(['my-environment']);
        break;
      case 2:
        break;
      case 3:
        if (num == 3) this.dialog.open(LoginModalComponent,{})
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      default:
    }
  }
  goToEnvironment(num: number) {
    switch (num) {
      case 0:
        this.router.navigate(['virtual-assistant']);
        break;
      case 1:
        this.router.navigate(['my-environment']);
        break;
      case 2:
        break;
      case 3:
        if (num == 3) this.dialog.open(LoginModalComponent,{})
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      default:
    }
  }

  changeLanguage(language: LanguagesModel){
    this.translateService.use(language);
  }
  goToSearch(num: number){
   // this.router.navigate(['my-environment-search'])
    if (num == 0) {
      this.title = 'common.button.mall'
      //Here go all the data of Big-malls
    }else if (num == 1) {
      this.title = 'common.button.gallery-market'
      //Here go all the data of Commercial-galleries
    }else if (num == 2) {
      this.title = 'common.button.big-stablish'
      //Here go all the data of Large-stablishments
    }else if (num == 3) {
      this.title = 'common.button.market-fair'
      //Here go all the data of Market-fairs
    }else if (num == 4) {
      this.title = 'common.button.public-market'
      //Here go all the data of Municipal-markets
    }

  }

}
