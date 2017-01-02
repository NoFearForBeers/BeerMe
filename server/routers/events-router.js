/* globals module require */

const express = require("express");
let Router = express.Router;

module.exports = function({ app, controllers }) {
    let router = new Router();

    router
        .get("/events/:id", controllers.getEventsById)
        .get("/events", controllers.getAllEvents);

    app.use("/api", router);

    return router;
};