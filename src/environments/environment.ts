// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BACKEND_BASE_URL: '',
  BACKEND_LOGIN_URL: '/login',
  BACKEND_REGISTER_URL: '/register',
  BACKEND_ZONES_URL: '../../assets/dummy/full/zones_dummy.json',
  BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL: '../../assets/dummy/full/activities_dummy.json',
  BACKEND_COMMERCIAL_GALLERIES_ACTIVITIES_URL: '../../assets/dummy/full/activities_dummy.json',
  BACKEND_BIG_MALLS_ACTIVITIES_URL: '../../assets/dummy/full/activities_dummy.json',
  BACKEND_LARGE_STABLISHMENTS_SEARCH_URL: '../../assets/dummy/large-establishments_zones_activity_dummy.json',
  BACKEND_SAVED_SEARCHES_URL: '../../assets/dummy/saved-search-large-establishments_dummy.json',
  BACKEND_BIG_MALLS_URL: '../assets/dummy/full/big-malls_dummy.json',
  BACKEND_MUNICIPAL_MARKETS: '../../assets/dummy/full/municipal-markets_dummy.json',
  //fake dummy
  BACKEND_LARGE_ESTABLISHMENTS_FAKE_FILTERED_RESULTS: '../../assets/dummy/large_establishments_fake_filtered_results.json',
  BACKEND_BIG_MALLS_FAKE_FILTERED_RESULTS: '../assets/dummy/big-malls_fake_filtered_results.json',
  BACKEND_MUNICIPAL_MARKETS_FAKE_FILTERED_RESULTS: '../assets/dummy/municipal-markets_fake_filtered_results.json',
  BACKEND_MARKET_FAIRS_FAKE_FILTERED_RESULTS: '../assets/dummy/market-fairs_fake_filtered_results.json',
  BACKEND_COMMERCIAL_GALLERIES_FAKE_FILTERED_RESULTS:'../../assets/dummy/full/commercial-galleries_dummy.json',
  //mapbox
  MAPBOX_TOKEN: 'pk.eyJ1IjoianZyZnJlZWxhbmNlZGV2ZWxvcGVyIiwiYSI6ImNreTl4czUzMTAwNGQydnFsdmRhYXRvbDUifQ.TVL-2T184QdfXbze6VNw4A',
  MAPBOX_ZOOM: 8,
  MAPBOX_STYLE: 'mapbox://styles/mapbox/streets-v11',
  MAPBOX_COORDINATES_FORMAT: 'GCS',
  BACKEND_COMMERCIAL_GALLERIES:'../../assets/dummy/full/commercial-galleries_dummy.json',
};