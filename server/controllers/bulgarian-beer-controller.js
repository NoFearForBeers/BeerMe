/* globals module */

module.exports = function(params) {
    let { data } = params;

    return {
        getAllBeers(req, res) {
            data.getAllBeers()
                .then(allBeers => {
                    console.log(allBeers);
                    res.json({ data: allBeers})
                })
                .catch(err => {
                    res.json(err);
                });
        },
        getBeerById(req, res) {
            data.getBeerById(req.params.id)
                .then((beer) => {
                    console.log(beer);
                    res.json({ data: beer });
                })
                .catch(err => {
                    res.json(err);
                });
        }
    };
};