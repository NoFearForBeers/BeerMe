/* globals module require */

const express = require("express");
let Router = express.Router;

module.exports = function({ app, controllers }) {
    let router = new Router();

    router
        .get("/beer-types", controllers.getAllBeerTypes);
        
    app.use("/api", router);

    return router;
};