import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { BasicBusinessModel } from 'src/app/shared/models/common/basic-business.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-environment-result',
  templateUrl: './my-environment-result.component.html',
  styleUrls: ['./my-environment-result.component.scss']
})
export class MyEnvironmentResultComponent implements OnInit, OnDestroy {


  results:BasicBusinessModel[] =[];
  subscription!:Subscription;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.subscription = this.getResults().subscribe((data:any)=>data ? this.results= (data.results as BasicBusinessModel[]):[])
  }

  getResults(){

    return this.http.get(
      `${ environment.BACKEND_BASE_URL }${environment.BACKEND_BIG_MALLS_FAKE_FILTERED_RESULTS}`,
      {

      }).pipe(take(1));
  }

  ngOnDestroy(): void {  this.subscription ? this.subscription.unsubscribe():null  }

}
