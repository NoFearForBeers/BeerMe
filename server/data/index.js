/* globals module require global __dirname process */
'use strict';

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.Promise = global.Promise;

module.exports = function(connectionString) {
    mongoose.connect(connectionString);

    // register all models
    let User = require("../models/user-model");
    let BulgarianBeer = require("../models/bulgarian-beer-model");
    let News = require("../models/news-model");
    let BeerTypes = require("../models/beer-types-model");
    let BeerBrands = require("../models/beer-brands-model");
    let Events = require("../models/events-model");
    let Participation = require("../models/participation-model");
    let Recipe = require("../models/recipe-model");

    let models = { User, BulgarianBeer, News, BeerTypes, BeerBrands, Recipe, Events, Participation };

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