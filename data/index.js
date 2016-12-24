/* globals module require global __dirname process */
'use strict';

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.Promise = global.Promise;

module.exports = function({ config }) {
    mongoose.connect(config.connectionString);

    // register all models
    let Superhero = require("../models/superhero-model");
    let User = require("../models/user-model");

    let models = { Superhero, User };

    let data = {};
    fs.readdirSync(__dirname)
        .filter(file => file.includes("-data"))
        .forEach(file => {
            let modulePath = path.join(__dirname, file);
            let dataModule = require(modulePath)(models);

            Object.keys(dataModule)
                .forEach(key => {
                    data[key] = dataModule[key];
                });
        });

    return data;
};