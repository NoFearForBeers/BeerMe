/* globals module require */

const express = require("express");
let Router = express.Router;

module.exports = function({ app, controllers }) {
    let router = new Router();

    router
        .get("/api/users/:id", controllers.getUserById)
        .get("/*", controllers.home)
        .post("/users", controllers.createUser);

    app.use("/", router);

    return router;
};