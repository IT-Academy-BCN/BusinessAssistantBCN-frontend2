import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onClickButtonVirtualAssistantButton = () => {
    this.router.navigate(['virtual-assistant']);
  }

  onClickButtonMyEnvironment = () => {
    this.router.navigate(['my-environment']);
  }

}
