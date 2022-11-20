import { EconomicActivity } from 'src/app/shared/models/common/economic-activity.model';
import { Component, OnInit } from '@angular/core';
import { Zone } from 'src/app/shared/models/common/zone.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent implements OnInit {


  @Input() contentArray:Zone[] = [];
  @Input() checkHandler: (zoneSelected: Zone, event: any) => void = () => {};

  

  constructor() { }

  ngOnInit(): void {
  }

}
