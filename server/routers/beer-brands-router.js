/* globals module require */

const express = require("express");
let Router = express.Router;

module.exports = function({ app, controllers }) {
    let router = new Router();

    router
        .get("/beer-brands", controllers.getAllBeerBrands);
        
    app.use("/api", router);

    return router;
};