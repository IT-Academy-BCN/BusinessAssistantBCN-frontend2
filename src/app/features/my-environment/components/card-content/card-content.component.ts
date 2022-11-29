import { Component, OnInit, Input } from '@angular/core';
import { Zone } from 'src/app/shared/models/common/zone.model';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent {


  @Input() contentArray:Zone[] = [];
  @Input() checkHandler: (zoneSelected: Zone, event: any) => void = () => {};

}
