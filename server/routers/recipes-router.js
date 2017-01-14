/* globals module require */

const express = require("express");
let Router = express.Router;

module.exports = function({ app, controllers }) {
    let router = new Router();

    router
        .get("/recipes/:id", controllers.getRecipeById)
        .put("/recipes/:id", controllers.addCommentToRecipe)
        .get("/recipes", controllers.getAllPublicRecipes)
        .put("/unapproved-recipes/:id", controllers.changeRecipeStatus)
        .get("/unapproved-recipes", controllers.getAllUnapprovedRecipes)
        .post("/add-recipe", controllers.addRecipe);

    app.use("/api", router);

    return router;
};