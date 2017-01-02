/* globals module */
let dataUtils = require('./utils/data-utils');

module.exports = function(models) {
    let { Events } = models;

    return {
        getAllEvents() {
            return dataUtils.getAll(Events);
        },
        getEventsById(id) {
            return dataUtils.getOneById(Events, id)
        }
    };
};