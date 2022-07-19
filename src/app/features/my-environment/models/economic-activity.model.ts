export class EconomicActivityModel {

    idActivity: number ;
    activityName: string;
  
    constructor(element: any) {
      this.idActivity = element.idActivity;
      this.activityName = element.activityName;
    }
  
  }