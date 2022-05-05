import {EconomicActivityModel} from "./economic-activity.interface";


export interface BasicBusinessModel {
    name: string;
    web: string | string[] | null;
    email: string | null;
    phone: string | null;
    activities?: EconomicActivityModel[];
    activity?: EconomicActivityModel;
    addresses:  Address[];
}

interface Address {
    street_name: string;
    street_number: string | number;
    zip_code: string;
    district_id: string;
    town: string;
    location: {
        x: number;
        y: number;
    }
}