/* globals require module */

const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('BeerTypes', {
    name: {
        type: String
    },
    description: {
        type: String
    }
})