import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasicBusinessModel } from 'src/app/shared/models/common/basic-business.interface';
import { MyEnvironmentService } from '../../services/my-environment.service';

@Component({
  selector: 'app-my-environment-result',
  templateUrl: './my-environment-result.component.html',
  styleUrls: ['./my-environment-result.component.scss']
})
export class MyEnvironmentResultComponent implements OnInit {

  businessModelsArray: BasicBusinessModel[] = [];
  modelsSub:Subscription | null = null;


  constructor( private myEnvSrv: MyEnvironmentService) { }

  ngOnInit(): void {
    this.modelsSub=this.myEnvSrv.results.asObservable().subscribe((results:BasicBusinessModel[])=>{
      this.businessModelsArray=results;
  })
  }

}
