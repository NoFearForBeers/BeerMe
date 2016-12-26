/* globals module */
let dataUtils = require('./utils/data-utils');

module.exports = function(models) {
    let { BulgarianBeer } = models;

    return {
        getAllBeers() {
            return dataUtils.getAll(BulgarianBeer);
        },
        getBeerById(id) {
            return dataUtils.getOneById(BulgarianBeer, id)
        }
    };
};