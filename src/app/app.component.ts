import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BusinessAssistantBCN-frontend2';
  onActivate(){
    window.scroll(0, 0);
  }
}
