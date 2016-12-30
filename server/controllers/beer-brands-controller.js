/* globals module */

module.exports = function(params) {
    let { data } = params;

    return {
        getAllBeerBrands(req, res) {
            data.getAllBeerBrands()
                .then(allBeerBrands => {
                    //console.log(allBeerBrands);
                    res.json({ data: allBeerBrands })
                })
                .catch(err => {
                    //console.log(err);
                    res.json(err);
                });
        }
    }
};