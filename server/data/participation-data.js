/* globals module */
let dataUtils = require('./utils/data-utils');

module.exports = function(models) {
    let { Participation } = models;

    return {
        getAllParticipations() {
            return dataUtils.getAll(Participation);
        }     
    };
};