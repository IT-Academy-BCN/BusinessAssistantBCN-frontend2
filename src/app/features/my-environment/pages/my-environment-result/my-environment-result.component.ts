
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointService } from 'src/app/services/shared/breakpoint/breakpoint.service';
import { VIRTUAL_ASSISTANT_MAT_GRID_LIST } from 'src/app/shared/components/component-constants';
import { Subscription } from 'rxjs';
import { MyEnvironmentService } from '../../services/my-environment.service';


@Component({
  selector: 'app-my-environment-result',
  templateUrl: './my-environment-result.component.html',
  styleUrls: ['./my-environment-result.component.scss']
})
export class MyEnvironmentResultComponent implements OnInit, OnDestroy {


  breakpoint: number | string | "Unknown";
  ratio: string | number;

  //businessModelsArray: BasicBusinessModel[] = [];
  modelsSub:Subscription | null = null;
  selectedList: any[] = [];

  constructor(private responsive: BreakpointService,
    private myEnvSrv: MyEnvironmentService) {
    const value = VIRTUAL_ASSISTANT_MAT_GRID_LIST.get(this.responsive.getCurrentScreenSize());
    if (value != undefined) {
      this.breakpoint = value[0];
      this.ratio = value[1];
    } else {
      this.breakpoint = 0;
      this.ratio = "150px";
    }
   }

  ngOnInit(): void {

/*    this.modelsSub=this.myEnvSrv.results.asObservable().subscribe((results:BasicBusinessModel[])=>{
      this.businessModelsArray=results;
  })*/

  }

 // results:BasicBusinessModel[] =[];
  subscription!:Subscription;

  selectItem(item:any){

    const selectedIndex = this.selectedList.findIndex(e=>e==item), list = [...this.selectedList];

    if(selectedIndex==-1) list.push(item); else list.splice(selectedIndex,1);

    this.selectedList = list;
    
  }

  ngOnDestroy(): void {  this.subscription ? this.subscription.unsubscribe():null  }

}
