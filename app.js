'use strict';
var config = require('./config');
var data = require('./data')({ config: config });
var app = require('./config/application')({ data: data });
app.get('/', function (req, res) {
    return res.render('index');
});
app.get('/api/superheroes', function (req, res) {
    data.getSuperheroes()
        .then(function (result) {
        //console.log(result)
        //return res.send({result:result});
        return res.send({ result: result });
    });
});
app.listen(3000, function () { return console.log('App listening on :3000'); });
//# sourceMappingURL=app.js.map