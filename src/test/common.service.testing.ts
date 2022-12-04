
import { Observable, of } from 'rxjs';

export class CommonTestingService {
 
    getZones(): Observable<any> {
      return of(
        {
          "count": 10,
          "elements": [
            {
              "idZone": 1,
              "zoneName": "Ciutat Vella"
            },
            {
              "idZone": 2,
              "zoneName": "Eixample"
            },
            {
              "idZone": 3,
              "zoneName": "Sants-Montjuïc"
            },
            {
              "idZone": 4,
              "zoneName": "Les Corts"
            },
            {
              "idZone": 5,
              "zoneName": "Sarrià-Sant Gervasi"
            },
            {
              "idZone": 6,
              "zoneName": "Gràcia"
            },
            {
              "idZone": 7,
              "zoneName": "Horta-Guinardó"
            },
            {
              "idZone": 8,
              "zoneName": "Nou Barris"
            },
            {
              "idZone": 9,
              "zoneName": "Sant Andreu"
            },
            {
              "idZone": 10,
              "zoneName": "Sant Martí"
            }
          ]
        }
      );
    }
  }