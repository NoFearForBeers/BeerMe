/* globals require module */

const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('Participation', {
    username: {
        type: String,
    },
    eventId:{
        type: String
    },
    eventTitle:{
        type: String
    },
    categories: {
        type: []
    },
    comment: {
        type: String
    }   
})