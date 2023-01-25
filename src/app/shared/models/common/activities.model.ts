import { EconomicActivity } from "./economic-activity.model";

export interface Activities {
    offset:  number;
    limit:   number;
    count:   number;
    results: EconomicActivity[];
}