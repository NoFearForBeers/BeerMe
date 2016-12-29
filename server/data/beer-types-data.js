/* globals module */

let dataUtils = require('./utils/data-utils');

module.exports = function(models) {
    let { BeerTypes } = models;

    return {
        getAllBeerTypes() {
            return dataUtils.getAll(BeerTypes);
        }
    };
};