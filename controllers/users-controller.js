/* globals module */

module.exports = function(params) {
    let { data } = params;

    return {
        createUser(req, res) {
            data.createUser(req.body.id, req.body.username, req.body.firstName, req.body.lastName, req.body.profileImgURL, req.body.email, req.body.recipes, req.body.forumPoints)
                .then(() => {
                    res.json({ result: "User successfully created!" });
                })
                .catch(err => {
                    res.json(err);
                });
        },
        getUserById(req, res) {
            data.getUserById(req.params.id)
                .then((user) => {
                    console.log(user);
                    res.json({ result: user });
                })
                .catch(err => {
                    res.json(err);
                });
        }
    };
};