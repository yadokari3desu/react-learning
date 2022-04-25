import axios from 'axios';

/**
 * この形のアロー関数だと return は不要!
 * @param {string} place
 * @return {Promise}
 */
export const geocode = place =>
  axios
  .get('https://msearch.gsi.go.jp/address-search/AddressSearch?q=' + place)
  .then((results) => {
    console.log(results);
    if (results.data.length == 0) {
      return Promise.reject('No found results');
    }
    const searchResults = results.data.map((item) => {
      return {
        address: item.properties.title,
        lat: item.geometry.coordinates[1],
        lng: item.geometry.coordinates[0],
      }
    });
    return {
      address: searchResults[0].address,
      lat: searchResults[0].lat,
      lng: searchResults[0].lng,
      searchResults: searchResults,
    };
  })
;

