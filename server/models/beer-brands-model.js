/* globals require module */

const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('BeerBrands', {
    company: {
        type: String
    },
    imgUrl: {
        type: String
    },
    brands: [],
    webpage: {
        type: String
    }
})