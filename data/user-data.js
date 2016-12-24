/* globals module */

module.exports = function(models) {
    let { User } = models;

    return {
        createUser(id,
            firtsName,
            lastName,
            picture,
            email,
            recipes,
            forumPoints) {
            return new Promise((resolve, reject) => {

                let user = new User({
                    User,
                    id,
                    firtsName,
                    lastName,
                    picture,
                    email,
                    recipes,
                    forumPoints
                });

                user.save(err => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                });
            });
        },
        getUserById(id) {
            return new Promise((resolve, reject) => {
                User.findOne({ id }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    if (user) {
                        return resolve(user);
                    }

                    return reject("no such user");
                });
            });
        }
    };
};