/* globals module require */

const express = require("express");
let Router = express.Router;

module.exports = function({ app, controllers }) {
    let router = new Router();

    router
        // .get("/recipes/:id", controllers.getRecipeById)
        // .get("/recipes", controllers.getAllRecipes)
        .get("/unapproved-recipes", controllers.getAllUnapprovedRecipes)
        // .get("/unapproved-recipes/:id", controllers.getUnapprovedRecipeById)
        .post("/add-recipe", controllers.addRecipe);

    app.use("/api", router);

    return router;
};