export class ZoneModel {

    idZone: number;
    zoneName: string;
  
    constructor(element: any) {
      this.idZone = element.idZone;
      this.zoneName = element.zoneName;
    }
  
  }