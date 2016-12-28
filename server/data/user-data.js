/* globals module */
let dataUtils = require('./utils/data-utils');

module.exports = function(models) {
    let { User } = models;

    return {
        createUser(user) {
            return new Promise((resolve, reject) => {
                    let newUser = new User({
                        username: user.username,
                        firstname: user.firtsName,
                        lastName: user.lastName,
                        profileImgURL: user.profileImgURL,
                        email: user.email,
                        passhash: user.password,
                        recipes: user.recipes,
                        forumPoints: user.forumPoints,
                        isAdmin: user.isAdmin
                    });

                    resolve(newUser);
                })
                .then((newUser) => {
                    return dataUtils.save(newUser);
                })
        },
        findUserById(id) {
            return new Promise((resolve, reject) => {
                User.findOne({ _id }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    if (user) {
                        return resolve(user);
                    }

                    return reject("no such user");
                });
            });
        },
        findUserByCredentials(username, passhash) {
            return new Promise((resolve, reject) => {
                User.findOne({ username, passhash }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(user);
                });
            });
        }
    };
};