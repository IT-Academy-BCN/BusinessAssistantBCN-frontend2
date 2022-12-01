// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // BACKEND_BASE_URL: '',
  BACKEND_BASE_URL: 'http://localhost:8762/businessassistantbcn/api/v1/',
  BACKEND_LOGIN_URL: '/login',
  BACKEND_REGISTER_URL: '/register',
  // BACKEND_ZONES_URL: '../../assets/dummy/full/zones_dummy.json',
  BACKEND_ZONES_URL: 'common/bcn-zones',
  // BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL: '../../assets/dummy/full/activities_dummy.json',
  BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL: 'opendata/large-establishments/activities',
  // BACKEND_LARGE_STABLISHMENTS_SEARCH_URL: '../../assets/dummy/large-establishments_zones_activity_dummy.json',
  BACKEND_LARGE_STABLISHMENTS_SEARCH_URL: 'opendata/large-establishments/search',
  // BACKEND_COMMERCIAL_GALLERIES_ACTIVITIES_URL: '../../assets/dummy/full/activities_dummy.json',
  BACKEND_COMMERCIAL_GALLERIES_ACTIVITIES_URL: 'opendata/commercial-galleries/activities',
  BACKEND_COMMERCIAL_GALLERIES_SEARCH_URL: 'opendata/commercial-galleries/search',  
  BACKEND_SAVED_SEARCHES_URL: '../../assets/dummy/saved-search-large-establishments_dummy.json',
  BACKEND_BIG_MALLS_URL: '../assets/dummy/full/big-malls_dummy.json',
  // BACKEND_BIG_MALLS_ACTIVITIES_URL: '../../assets/dummy/full/activities_dummy.json',
  BACKEND_BIG_MALLS_ACTIVITIES_URL: 'opendata/big-malls/activities',
  BACKEND_BIG_MALLS_SEARCH_URL: 'opendata/big-malls/search',
  // BACKEND_MUNICIPAL_MARKETS: '../../assets/dummy/full/municipal-markets_dummy.json',
  BACKEND_MUNICIPAL_MARKETS_SEARCH_URL: 'opendata/municipal-markets/search',
  BACKEND_MARKET_FAIRS_SEARCH_URL: 'opendata/market-fairs/search',
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