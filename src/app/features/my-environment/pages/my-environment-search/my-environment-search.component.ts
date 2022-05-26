import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyEnvironmentService } from '../../services/my-environment.service';

@Component({
  selector: 'app-my-environment-search',
  templateUrl: './my-environment-search.component.html',
  styleUrls: ['./my-environment-search.component.scss']
})
export class MyEnvironmentSearchComponent implements OnInit {

  title: string = ''

  constructor(
    private router: Router,
    private myEnvSrv: MyEnvironmentService
  ) { }

  ngOnInit(): void {
    this.title = this.myEnvSrv.title
  }

  goToResult(){
    this.router.navigate(['my-environment-result'])
  }

}
