// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BACKEND_BASE_URL: '',
  BACKEND_LOGIN_URL: '/login',
  BACKEND_REGISTER_URL: '/register',
  BACKEND_ZONES_URL: '/businessassistantbcn/api/v1/common/bcn-zones', /* OK */
  BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL: '/businessassistantbcn/api/v1/opendata/large-establishments/activities', /* OK */
  BACKEND_LARGE_STABLISHMENTS_SEARCH_URL: '/businessassistantbcn/api/v1/opendata/large-establishments/search', /* 400 - Bad Request */
  BACKEND_COMMERCIAL_GALLERIES_ACTIVITIES_URL: '/businessassistantbcn/api/v1/opendata/commercial-galleries/activities', /* OK */ 
  BACKEND_SAVED_SEARCHES_URL: '../../assets/dummy/saved-search-large-establishments_dummy.json',
  BACKEND_MARKET_FAIRS_URL: '/businessassistantbcn/api/v1/opendata/market-fairs',
  BACKEND_BIG_MALLS_URL: '/businessassistantbcn/api/v1/opendata/big-malls', /* OK  */
  BACKEND_BIG_MALLS_ACTIVITIES_URL: '/businessassistantbcn/api/v1/opendata/big-malls/activities', /*  OK  */
  BACKEND_MUNICIPAL_MARKETS: '/businessassistantbcn/api/v1/opendata/municipal-markets', /*  OK  */
  //mapbox
  MAPBOX_TOKEN: 'pk.eyJ1IjoianZyZnJlZWxhbmNlZGV2ZWxvcGVyIiwiYSI6ImNreTl4czUzMTAwNGQydnFsdmRhYXRvbDUifQ.TVL-2T184QdfXbze6VNw4A',
  MAPBOX_ZOOM: 8,
  MAPBOX_STYLE: 'mapbox://styles/mapbox/streets-v11',
  MAPBOX_COORDINATES_FORMAT: 'GCS',
  //jwt
  AUTHORIZATION: 'Authorization',
  BEARER: 'Bearer ',
  BACKEND_TOKEN: 'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InVlYmVybWVuc2NoQHphcmF0aHVzdHJhLmNvbSIsInBhc3N3b3JkIjoiTDJtbnh1cX1eWiNyQWg3XUooXm9pQCU0QDosRXZmLVYiLCJhdXRob3JpdGllcyI6WyJTVVBFUlVTRVIiXSwiaWF0IjoxNjY5MTM1MjAzfQ.ySbRr7yOZcTwfOux1oitmNUfrM6omb-ky64fGrrqngk',
};

