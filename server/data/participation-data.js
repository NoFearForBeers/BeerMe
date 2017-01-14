/* globals module */
let dataUtils = require('./utils/data-utils');

module.exports = function(models) {
    let { Participation } = models;

    return {
        getAllParticipations() {
            return dataUtils.getAll(Participation);
        },   
        createParticipation(participation) {
             return new Promise((resolve, reject) => {
                    let newParticipation = new Participation({
                        username: participation.username,
                        eventId: participation.eventId,
                        eventTitle: participation.eventTitle,
                        categories: participation.categories,
                        comment: participation.comment
                    });

                    resolve(newParticipation);
                })
                .then((newParticipation) => {
                    return dataUtils.save(newParticipation);
                })
        },
        }         
    };