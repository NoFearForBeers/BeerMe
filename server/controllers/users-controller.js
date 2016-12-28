/* globals module */

let jwt = require('jwt-simple');
let qs = require('querystring');
const encrypt = require("../utils/encryption");
let secret = "Secret unicorns";
const passport = require('passport'),
    DEFAULT_IMAGE = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTqhN3-lNH2F8f_eCb0wBD650zauwEIBNsIyzgVHa1kJh72dGGjRw';

module.exports = function({ data, validator }) {
    return {
        login(req, res) {
            // console.log(req.body);
            let password = req.body.password;
            let username = req.body.username;
            let hashPass = encrypt.generateHashedPassword(encrypt.generateSalt(), password);
            console.log(hashPass);
            console.log(data.findUserByCredentials(username, hashPass));

            data.findUserByCredentials(username, hashPass)
                .then((user) => {
                    if (user) {
                        let token = jwt.encode(user, secret);
                        // console.log("**here**");
                        // console.log(user);
                        // console.log(token);
                        return res.status(200).json({
                            success: true,
                            body: {
                                token: token,
                                username: user.username
                            }
                        });
                    }

                    return res.status(400).json({ success: false, msg: 'Authenticaton failed, wrong password.' });
                })
                .catch(error => {
                    return res.send(error);
                });
        },
        register(req, res) {
            let newUser = {};
            let propoerties = ['username', 'password', 'firstName', 'lastName', 'profileImgURL', 'email', 'recipes', 'forumPoints'];

            let postData = req.body['body'];
            let postDataObj = JSON.parse(postData);

            propoerties.forEach(property => {
                if (!property || property.length < 0) {
                    res.status(411).json(`Missing ${property}`);
                }

                newUser[property] = postDataObj[property];
            });

            // console.log(req.body);

            //for safety
            newUser.isAdmin = false;
            let body = JSON.parse(req.body.body);
            let pass = body.password;
            let avatar = body.profileImgURL;
            let hashPass = encrypt.generateHashedPassword(encrypt.generateSalt(), pass);
            newUser.hashPass = hashPass;
            newUser.profileImgURL = avatar || DEFAULT_IMAGE;
            // console.log(newUser);

            data.createUser(newUser)
                .then((data) => {
                    res.status(200).send({ success: true, data })
                })
                .catch(err => {
                    return res.status(400).send({ success: false, msg: 'User was not created' });
                });
        },
        getLoggedUser(req, res) {
            const token = req.headers.authorization;

            if (token) {
                let userInfo = jwt.decode(token.split(' ')[1], secret);
                let user = {
                    username: userInfo.username
                };

                res.status(200).json(user);
            } else {
                res.status(401).json({
                    success: false,
                    message: 'Please provide token'
                });
            }
        }
    };
};