import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LanguagesModel } from '../language-changer/language-changer.interface';
import { Router } from '@angular/router';
import { LoginModalComponent } from 'src/app/features/users/components/login-modal/login-modal.component';
import { BreakpointService } from 'src/app/services/shared/breakpoint/breakpoint.service';
import { zoomTitle } from './animation/header.animation';
import { AuthService } from '../../../features/users/services/auth.service';
import { Signup } from 'src/app/shared/models/common/signup.model';

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
    'common.button.search',
    'components.header.section2.title',
    'components.header.section4.title',
    'components.footer.section4.title',
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


  title: string = 'inactive'
  menu: boolean = false

  // user.name solo para fines visuales (muestra menú si existe), esperando respuesta de login para definir 'user' correctamente.
  user:Signup = { 
    id: 0,
    email: '',
    password: 0
}
  

  constructor(
    public  dialog     : MatDialog,
    private responsive : BreakpointService,
    private router     : Router,
    private translateService:TranslateService,
    private auth: AuthService
  ) {
    const currentScreenSize = this.responsive.getCurrentScreenSize();
    this.expandMenu(currentScreenSize);
  }

  ngOnInit(): void {
    this.responsive.breakpoint$.subscribe(result => {
      this.expandMenu(result);
    });
    this.getUserLogged();
    }
  
    
  getUserLogged() {
      this.user=this.auth.user
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
    // console.log(num)
    switch (num) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        if (num == 4) this.dialog.open(LoginModalComponent,{})
        break;
      case 5:
        break;
      case 6:
        if (num == 6) 
          {
            this.auth.loggedIn=false
            this.auth.user.name=undefined
        }
        break;
      default:
    }
  }

  changeLanguage(language: LanguagesModel){
    this.translateService.use(language);
  }


}
