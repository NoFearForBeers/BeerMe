/* globals module */
let dataUtils = require('./utils/data-utils');

module.exports = function(models, validator) {
    let { User } = models;

    return {
        createUser(user) {
            return new Promise((resolve, reject) => {
                    if (!validator.validateStringLength(username, 3, 50)) {
                        return reject("Error: Username must be between 3 and 50 symbols");
                    }

                    if (!validator.validateIsStringValid(username)) {
                        return reject("Username fail");
                    }

                    if (!validator.validateStringLength(firstName, 3, 50)) {
                        return reject("Error: First name must be between 3 and 50 symbols");
                    }

                    if (!validator.validateIsStringValid(firstName)) {
                        return reject("First name fail");
                    }

                    if (!validator.validateStringLength(lastName, 3, 50)) {
                        return reject("Error: Last name must be between 3 and 50 symbols");
                    }

                    if (!validator.validateIsStringValid(lastName)) {
                        return reject("Last name fail");
                    }

                    if (profileImgURL && !validator.validateImageUrl(profileImgURL)) {
                        return reject("Invalid image url");
                    }

                    if (!validator.validateEmail(email)) {
                        return reject("Email fail");
                    }

                    if (!salt) {
                        return reject("Salt must exists");
                    }

                    if (!hashPass) {
                        return reject("Hash pass must exists");
                    }

                    let newUser = new User({
                        username: user.username,
                        firstname: user.firtsName,
                        lastName: user.lastName,
                        profileImgURL: user.profileImgURL,
                        email: user.email,
                        hashPass: user.hashPass,
                        salt: user.salt,
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
        findUserByCredentials(username, hashPass) {
            return new Promise((resolve, reject) => {
                User.findOne({ username, hashPass }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(user);
                });
            });
        },
        getUserByUsername(username) {
            return new Promise((resolve, reject) => {
                User.findOne({ username }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                });
            });
        },
    };
};