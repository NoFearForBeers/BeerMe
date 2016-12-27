/* globals module */

let jwt = require('jwt-simple');
let qs = require('querystring');
let secret = "Secret unicorns";
const passport = require('passport'),
    DEFAULT_IMAGE = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTqhN3-lNH2F8f_eCb0wBD650zauwEIBNsIyzgVHa1kJh72dGGjRw';

module.exports = function({ data, encryption, validator }) {
    return {
        login(req, res) {
            let username = req.body.username;
            let password = req.body.password;
            data.findUserByCredentials(username, encryption(password))
                .then((user) => {
                    if (user) {
                        let token = jwt.encode(user, secret);
                        return res.status(200).json({ success: true, token: token });
                    }

                    return res.status(400).json({ success: false, msg: 'Authenticaton failed, wrong password.' });
                })
                .catch(error => {
                    return res.send(error);
                });
        },
        register(req, res) {
            let newUser = {};
            let propoerties = ['username', 'firstName', 'lastName', 'profileImgURL', 'email'];

            console.log('**********');
            console.log(req.body);

            let data = req.body['body'];
            let dataObj = JSON.parse(data);
            
            propoerties.forEach(property => {
                if (!property || property.length < 0) {
                    res.status(411).json(`Missing ${property}`);
                }

                newUser[property] = dataObj[property];
            });

            newUser.password = encryption(req.body.password);
            newUser.profileImgURL = req.body.password || DEFAULT_IMAGE;
            console.log(newUser);

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