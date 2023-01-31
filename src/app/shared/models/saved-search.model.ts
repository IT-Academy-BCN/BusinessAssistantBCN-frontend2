import { SearchItemResult } from './my-environment-search/search-item-result.model';
// import { BigMallModel } from "./big-mall.model";
// import { CommercialGalleryModel } from "./commercial-gallery.model";
// import { LargeStablishmentModel } from "./large-establishment.model";
// import { MarketFairModel } from "./marfet-fair.model";
// import { MunicipalMarketModel } from "./municipal-market.model";

export class SavedSearchesModel {
  user_uuid: number;
  searchDate: Date;
  searchName: string;
  searchDetail: string;
  searchResult: SearchItemResult[];
  constructor(user_uuid: number, search_name: string, search_detail: string, search_date: Date,
    search_result: SearchItemResult[]
  ) {
    this.user_uuid = user_uuid;
    this.searchName = search_name;
    this.searchDate = search_date;
    this.searchDetail = search_detail;
    this.searchResult = search_result;
  }

}
