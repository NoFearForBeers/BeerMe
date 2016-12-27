/* globals require module */

const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('BulgarianBeer', {
    name: {
        type: String,
        unique: true
    },
    imageUrl: {
        type: String
    },
    brand: {
        type: String
    },
    brewedAt: {
        type: String
    },
    style: {
        type: String
    },
    ratings: {
        type: Number
    },
    averageRating: {
        type: Number
    },
    comments: []
})