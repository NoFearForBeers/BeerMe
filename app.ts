'use strict';

var config = require('./config');
var data = require('./data')({ config: config });
var app = require('./config/application')({ data });
app.get('/', (req, res) => {
    return res.render('index');
});

// Users and authentication
app.post('/api/users', (req, res) => {
    data.createUser(req.body.id, req.body.username, req.body.firstName,  req.body.lastName, req.body.profileImgURL, req.body.email, req.body.recipes, req.body.forumPoints)
    .then(() => {
        res.json({ result:"User successfully created!" });
    })
    .catch(err => {
        res.json(err);
    });
});


app.get('/api/users/:id', (req, res) => {
    data.getUserById(req.params.id)
    .then((user) => {
        console.log(user);
        res.json({result: user});
    })
    .catch(err => {
        res.json(err);
    });
});

// Superheroes
app.get('/api/superheroes', (req, res) => {
    data.getSuperheroes()
    .then((result: any) => {
        //console.log(result)
        //return res.send(result);
        return res.send({ result: result} );
        });
});

app.listen(config.port, () => console.log(`App listening on :${config.port}`));