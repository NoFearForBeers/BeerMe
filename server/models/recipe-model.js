/* globals require module */

const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('Recipe', {
    name: {
        type: String,
        unique: true
    },
    ingredients: [],
    methodOfPreparation: {
        type: String
    },
    imgUrl: {
        type: String
    },
    author: {
        type: String
    },
    status: {
        type: String
    }
})