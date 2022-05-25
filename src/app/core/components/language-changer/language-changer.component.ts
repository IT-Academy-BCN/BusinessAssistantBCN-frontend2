import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-changer',
  templateUrl: './language-changer.component.html',
  styleUrls: ['./language-changer.component.scss']
})
export class LanguageChangerComponent implements OnInit {


  constructor(private translateService:TranslateService) { }

  ngOnInit(): void {
  }

  changeLanguage(language:string){
    this.translateService.use(language);
  }

}
