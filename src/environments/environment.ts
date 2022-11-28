// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BACKEND_BASE_URL: '', 
  BACKEND_LOGIN_URL: '/login',
  BACKEND_REGISTER_URL: '/register',
  BACKEND_ZONES_URL: '/businessassistantbcn/api/v1/opendata/common/zones', /* 404 - Not found */
  BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL: '/businessassistantbcn/api/v1/opendata/large-establishments/activities', /* OK */
  BACKEND_LARGE_STABLISHMENTS_SEARCH_URL: '/businessassistantbcn/api/v1/opendata/large-establishments/search', /* 400 - Bad Request */
  BACKEND_COMMERCIAL_GALLERIES_ACTIVITIES_URL: '/businessassistantbcn/api/v1/opendata/commercial-galleries/activities', /* OK */
  BACKEND_SAVED_SEARCHES_URL: '/businessassistantbcn/api/v1/mydata/mysearches', /* 404 - Not found  */
  BACKEND_BIG_MALLS_URL: '/businessassistantbcn/api/v1/opendata/big-malls', /* OK  */
  BACKEND_BIG_MALLS_ACTIVITIES_URL: '/businessassistantbcn/api/v1/opendata/big-malls/activities', /*  OK  */
  BACKEND_MUNICIPAL_MARKETS: '/businessassistantbcn/api/v1/opendata/municipal-markets', /*  OK  */
  //mapbox
  MAPBOX_TOKEN: 'pk.eyJ1IjoianZyZnJlZWxhbmNlZGV2ZWxvcGVyIiwiYSI6ImNreTl4czUzMTAwNGQydnFsdmRhYXRvbDUifQ.TVL-2T184QdfXbze6VNw4A',
  MAPBOX_ZOOM: 8,
  MAPBOX_STYLE: 'mapbox://styles/mapbox/streets-v11',
  MAPBOX_COORDINATES_FORMAT: 'GCS'
  
};