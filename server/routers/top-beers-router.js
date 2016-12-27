/* globals module require */

const express = require("express");
let Router = express.Router;

module.exports = function({ app, controllers }) {
    let router = new Router();

    router
        .get("/top-beers/:id", controllers.getBeerById)
        .get("/top-beers", controllers.getAllBeers);

    app.use("/api", router);

    return router;
};