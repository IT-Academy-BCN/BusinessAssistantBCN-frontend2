import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapboxMarkersService {

    //CODE TO TEST FROM STACK OVERFLOW
currentMarkerSubject : Subject<any> = new Subject<any>();
myData : any ;

changeCurrentMarkerIndex(data : any){
 this.myData = data;
 this.currentMarkerSubject.next(this.myData);
}
//END OF GENERIC CODE FROM STACK OVERFLOW

updateCurrentMarker(markerIndex: number) {
  this.changeCurrentMarkerIndex(markerIndex);
}
  constructor() { }
}
