import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguagesModel } from './language-changer.interface';

@Component({
  selector: 'app-language-changer',
  templateUrl: './language-changer.component.html',
  styleUrls: ['./language-changer.component.scss']
})
export class LanguageChangerComponent implements OnInit {


  constructor(private translateService:TranslateService) { }

  ngOnInit(): void {
  }

  changeLanguage(language: LanguagesModel){
    this.translateService.use(language);
  }

}
