/* globals module */
let dataUtils = require('./utils/data-utils');

module.exports = function(models) {
    let { News } = models;

    return {
        getAllNews() {
            return dataUtils.getAll(News);
        },
        getNewsById(id) {
            return dataUtils.getOneById(News, id)
        }
    };
};