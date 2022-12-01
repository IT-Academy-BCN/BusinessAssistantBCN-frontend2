import {Zone} from "../common/zone.model";
import {SearchItemResult} from "./search-item-result.model";
import {EconomicActivity} from "../common/economic-activity.model";

export enum SearchType {
    BIG_MALLS,
    COMMERCIAL_GALLERIES,
    LARGE_ESTABLISHMENTS,
    MARKETS_AND_FAIRS,
    MUNICIPAL_MARKETS
}


export abstract class MyEnvironmentSearch {
   searchType!: SearchType;
   zone!: Zone;
   result!: SearchItemResult[];
   zones!: Zone[];
   activities!: EconomicActivity[];
}

export class BigMallsSearch extends MyEnvironmentSearch {

    // activities!: EconomicActivity[];

    constructor() {
        super();
        this.searchType = SearchType.BIG_MALLS;
    }

}

export class CommercialGalleriesSearch extends MyEnvironmentSearch {

    // activities!: EconomicActivity[];

    constructor() {
        super();
        this.searchType = SearchType.COMMERCIAL_GALLERIES;
    }

}

export class LargeEstablishmentsSearch extends MyEnvironmentSearch {

    // activities!: EconomicActivity[];

    constructor() {
        super();
        this.searchType = SearchType.LARGE_ESTABLISHMENTS;
    }

}

export class MarketsAndFairsSearch extends MyEnvironmentSearch {

    constructor() {
        super();
        this.searchType = SearchType.MARKETS_AND_FAIRS;
    }

}

export class MunicipalMarketsSearch extends MyEnvironmentSearch {

    constructor() {
        super();
        this.searchType = SearchType.MUNICIPAL_MARKETS;
    }

}

