/* globals require module */

const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('News', {
    title: {
        type: String
    },
    imageUrl: {
        type: String
    },
    postDate: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String
    }
})