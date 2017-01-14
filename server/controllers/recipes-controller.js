/* globals module */

let jwt = require('jwt-simple');
const encrypt = require("../utils/encryption");
let secret = "Secret unicorns";
const passport = require('passport'),
    DEFAULT_IMAGE = 'http://www.clipartbest.com/cliparts/Rid/Ro5/RidRo56nT.jpeg';

module.exports = function({ data, validator }) {
    return {
        addRecipe(req, res) {
            let newRecipe = {};
            let propoerties = ['name', 'ingredients', 'methodOfPreparation', 'author', 'rejectMessage'];

            let postData = req.body['body'];
            let postDataObj = JSON.parse(postData);

            propoerties.forEach(property => {
                if (!property || property.length < 0) {
                    res.status(411).json(`Missing ${property}`);
                }

                newRecipe[property] = postDataObj[property];
            });

            //for safety
            let newRecipeStatus = 'waiting-for-approval';
            newRecipe.status = newRecipeStatus;

            let avatar = postDataObj.imgUrl;
            newRecipe.imgUrl = avatar || DEFAULT_IMAGE;
            // console.log(newRecipe);

            data.createRecipe(newRecipe)
                .then((data) => {
                    res.status(200).send({ success: true, data })
                })
                .catch(err => {
                    return res.status(400).send({ success: false, msg: 'Recipe was not created' });
                });
        },
        getAllPublicRecipes(req, res) {
            data.getAllPublicRecipes()
                .then(recipes => {
                    res.json({ data: recipes })
                })
                .catch(err => {
                    res.json(err);
                });
        },
        getAllUnapprovedRecipes(req, res) {
             data.getAllUnapprovedRecipes()
                .then(unapprovedRecipes => {
                    res.json({ data: unapprovedRecipes })
                })
                .catch(err => {
                    res.json(err);
                });
        },
        getRecipeById(req, res) {
            data.getRecipeById(req.params.id)
                .then((recipe) => {
                    //console.log(beer);
                    res.json({ data: recipe });
                })
                .catch(err => {
                    res.json(err);
                });
        },
        changeRecipeStatus(req, res) {
            let recipe = {};
            let propoerties = ['_id', 'status', 'rejectMessage'];

            let postData = req.body['body'];
            let postDataObj = JSON.parse(postData);

            propoerties.forEach(property => {
                if (!property || property.length < 0) {
                    res.status(411).json(`Missing ${property}`);
                }

                recipe[property] = postDataObj[property];
            });

            data.changeRecipeStatus(recipe)
                .then((data) => {
                    res.status(200).send({ success: true, data })
                })
                .catch(err => {
                    return res.status(400).send({ success: false, msg: 'Рецептата не беше променена!' });
                });
        },
        addCommentToRecipe(req, res) {
            let postData = req.body['body'];
            let recipe = JSON.parse(postData);

            data.addCommentToRecipe(recipe)
                .then((data) => {
                    res.status(200).send({ success: true, data })
                })
                .catch(err => {
                    return res.status(400).send({ success: false, msg: 'Коментарът не беше добавен!' });
                });
        }
    };
};