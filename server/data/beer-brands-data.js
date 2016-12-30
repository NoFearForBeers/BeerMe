/* globals module */

let dataUtils = require('./utils/data-utils');

module.exports = function(models) {
    let { BeerBrands } = models;

    return {
        getAllBeerBrands() {
            return dataUtils.getAll(BeerBrands);
        }
    };
};