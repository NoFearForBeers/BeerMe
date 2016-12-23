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
        //return res.send(result);
        return res.send({ result: result });
    });
});
app.listen(config.port, function () { return console.log("App listening on :" + config.port); });
//# sourceMappingURL=app.js.map