'use strict';

var config = require('./config');
var data = require('./data')({ config: config });
var app = require('./config/application')({ data });

app.get('/', (req, res) => {
    return res.render('index');
});

app.get('/api/superheroes', (req, res) => {
    data.getSuperheroes()
    .then((result: any) => {
        //console.log(result)
        //return res.send(result);
        return res.send({result: result});
        });
});

app.listen(3000, () => console.log('App listening on :3000'));