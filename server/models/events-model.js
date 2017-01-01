/* globals require module */

const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('Events', {
    title: {
        type: String
    },
    time: {
        type: String
    },
    place: {
        type: String
    },
    imageUrl: {
        type: String
    },
    info: {
        type: String
    },
    terms: {
        type: String
    },
    qualifications: {
        type: String
    },
    category: {
        type: []
    },
    entry: {
        type: String
    },
    judging: {
        type: String
    },
    results: {
        type: String
    },
})
