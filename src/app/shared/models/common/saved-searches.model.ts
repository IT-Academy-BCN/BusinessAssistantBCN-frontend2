import { BigMallModel } from '../big-mall.model';
import { CommercialGalleryModel } from '../commercial-gallery.model';
import { MunicipalMarketModel } from '../municipal-market.model';
import { MarketFairModel } from '../market-fair.model';
import { LargeStablishmentModel } from '../large-stablishment.model';


export class SavedSearchesModel {
  search_uuid: number;
  user_uuid: number;
  search_date: Date;
  search_name: string;
  search_detail: string;
  search_result: LargeStablishmentModel[] | BigMallModel[] | CommercialGalleryModel[] | MarketFairModel[] | MunicipalMarketModel[]

  constructor(search_uuid:number, user_uuid:number, search_name: string, search_date: Date, search_detail: string,
    search_result: LargeStablishmentModel[] | BigMallModel[] | CommercialGalleryModel[] | MarketFairModel[] | MunicipalMarketModel[]
  ) {
    this.search_uuid = search_uuid;
    this.user_uuid = user_uuid;
    this.search_name = search_name;
    this.search_date = search_date;
    this.search_detail = search_detail;
    this.search_result = search_result;
  }

}

