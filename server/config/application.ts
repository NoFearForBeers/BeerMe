'use strict';

const express = require('express'),
    bodyParser = require('body-parser')
    //cookieParser = require('cookie-parser')
    //session = require('express-session');

module.exports = function () {
    const app = express();

    app.set('view engine', 'pug');
    app.use('/libs', express.static('./node_modules'));
    app.use('/static', express.static('./public'));

    //app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    // app.use(cookieParser());
    // app.use(session({ secret: 'totally random' }));

    return app;
};