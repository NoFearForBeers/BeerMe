/* globals require module */

const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('Participation', {
    userId: {
        type: String,
    },
    eventId:{
        type: String
    },
    categories: {
        type: []
    },
    comments: {
        type: String
    }   
})