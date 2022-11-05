import { Component, OnInit } from '@angular/core';
import { BasicBusinessModel } from 'src/app/shared/models/common/basic-business.interface';
import { BreakpointService } from 'src/app/services/shared/breakpoint/breakpoint.service';
import { VIRTUAL_ASSISTANT_MAT_GRID_LIST } from 'src/app/shared/components/component-constants';

@Component({
  selector: 'app-my-environment-result',
  templateUrl: './my-environment-result.component.html',
  styleUrls: ['./my-environment-result.component.scss']
})
export class MyEnvironmentResultComponent implements OnInit {

  businessModels: BasicBusinessModel[] = [];

  breakpoint: number | string | "Unknown";
  ratio: string | number;

  constructor(private responsive: BreakpointService,) {
    const value = VIRTUAL_ASSISTANT_MAT_GRID_LIST.get(this.responsive.getCurrentScreenSize());
    if (value != undefined) {
      this.breakpoint = value[0];
      this.ratio = value[1];
    } else {
      this.breakpoint = 0;
      this.ratio = "350px";
    }
   }

  ngOnInit(): void {

    this.businessModels = [
      {
        name: "Compañia Roca Sanitario",
        email: "infosan@roca.net",
        web: "http://roca.es",
        phone: null,
        activities: [],
      addresses: [{
        district_id: "09",
        location: {x: 2.199667, y: 41.4323},
        street_name: "T Estadella",
        street_number: "46*54",
        town: "BARCELONA",
        zip_code: "08030"
      }]
      },
      {
        name: "Compañia Roca Sanitario",
        email: "infosan@roca.net",
        web: "http://roca.es",
        phone: null,
        activities: [],
      addresses: [{
        district_id: "09",
        location: {x: 2.199667, y: 41.4323},
        street_name: "T Estadella",
        street_number: "46*54",
        town: "BARCELONA",
        zip_code: "08030"
      }]
      }
    ]
  }

}
