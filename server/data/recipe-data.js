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
                        status: recipe.status
                    });

                    resolve(newRecipe);
                })
                .then((newRecipe) => {
                    return dataUtils.save(newRecipe);
                })
        },
        getAllUnapprovedRecipes() {
            return dataUtils.getAllByStatus(Recipe, waitingForApprovalStatus);
        }
        // getBeerById(id) {
        //     return dataUtils.getOneById(BulgarianBeer, id)
        // }
    };
};