/* globals require module */

const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('Superhero', {
    name: {
        type: String,
        required: true
    },
    secretIdentity:{
        type: String
    },
    powers: []
})