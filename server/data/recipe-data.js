/* globals module */
let dataUtils = require('./utils/data-utils');

module.exports = function(models) {
    let { Recipe } = models;
    const waitingForApprovalStatus = "waiting-for-approval";

    return {
        createRecipe(recipe) {
            return new Promise((resolve, reject) => {
                    let newRecipe = new Recipe({
                        name: recipe.name,
                        ingredients: recipe.ingredients,
                        methodOfPreparation: recipe.methodOfPreparation,
                        imgUrl: recipe.imgUrl,
                        author: recipe.author,
                        status: recipe.status,
                        rejectMessage: recipe.rejectMessage
                    });

                    resolve(newRecipe);
                })
                .then((newRecipe) => {
                    return dataUtils.save(newRecipe);
                })
        },
        getAllUnapprovedRecipes() {
            return dataUtils.getAllByStatus(Recipe, waitingForApprovalStatus);
        },
        getRecipeById(id) {
            return dataUtils.getOneById(Recipe, id)
        },
        changeRecipeStatus(recipeInfo) {
            return new Promise((resolve, reject) => {
                this.getRecipeById(recipeInfo._id)
                    .then(recipeForUpdate => {
                            recipeForUpdate.status = recipeInfo.status;
                            recipeForUpdate.rejectMessage = recipeInfo.rejectMessage;
                        
                        dataUtils.update(recipeForUpdate);
                        resolve(recipeForUpdate);
                        })
                    });
        }
    };
};