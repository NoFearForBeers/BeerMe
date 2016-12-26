/* globals module require */

const express = require("express");
let Router = express.Router;

module.exports = function({ app, controllers }) {
    let router = new Router();

    router
        .get("/api/users/:id", controllers.getUserById)
        .post("/users", controllers.createUser)
        .get("/api/top-beers", controllers.getAllBeers)
        .get("/*", controllers.home);

    app.use("/", router);

    return router;
};