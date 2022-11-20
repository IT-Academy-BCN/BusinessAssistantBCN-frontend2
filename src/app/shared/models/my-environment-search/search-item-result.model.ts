import {EconomicActivity} from "../common/economic-activity.model";
import {Address} from "../common/address.model";

export class SearchItemResult {

    name!: string;
    web!: string | string[] | null;
    email!: string | null;
    phone!: string | null;
    addresses!: Address[];
}