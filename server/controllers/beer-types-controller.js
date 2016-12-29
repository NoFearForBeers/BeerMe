/* globals module */

module.exports = function(params) {
    let { data } = params;

    return {
        getAllBeerTypes(req, res) {
            data.getAllBeerTypes()
                .then(allBeerTypes => {
                    //console.log(allBeerTypes);
                    res.json({ data: allBeerTypes })
                })
                .catch(err => {
                    res.json(err);
                });
        }
    }
};