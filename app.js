'use strict';
var config = require('./config');
var data = require('./data')({ config: config });
var app = require('./config/application')({ data: data });
app.get('/', function (req, res) {
    return res.render('index');
});
// Users and authentication
app.get('/api/users', function (req, res) {
    data.createUser(req.body.id, req.body.username, req.body.firstName, req.body.lastName, req.body.picture, req.body.email, req.body.recipes, req.body.forumPoints)
        .then(function () {
        res.json("User successfully created!");
    });
});
app.get('/api/users/:id', function (req, res) {
    data.getUserById(req.params.id)
        .then(function (user) {
        res.json({ result: user });
    })
        .catch(function (err) {
        res.json(err);
    });
});
// Superheroes
app.get('/api/superheroes', function (req, res) {
    data.getSuperheroes()
        .then(function (result) {
        //console.log(result)
        //return res.send(result);
        return res.send({ result: result });
    });
});
app.listen(config.port, function () { return console.log("App listening on :" + config.port); });
//# sourceMappingURL=app.js.map