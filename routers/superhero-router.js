/* globals module require */

const express = require("express");
let Router = express.Router;

module.exports = function({ app, controllers }) {
    let router = new Router();

    router
        .get("/api/superheroes", controllers.getAllSuperheroes);

    app.use("/", router);

    return router;
};