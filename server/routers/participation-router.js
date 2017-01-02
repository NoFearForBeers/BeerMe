/* globals module require */

const express = require("express");
let Router = express.Router;

module.exports = function({ app, controllers }) {
    let router = new Router();

    router
        .get("/participations", controllers.getAllParticipations)
        .post("/participations", controllers.createParticipation);

    app.use("/api", router);

    return router;
};