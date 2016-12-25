/* globals module */

module.exports = function(params) {
    let { data } = params;

    return {
        getAllSuperheroes(req, res) {
            data.getSuperheroes()
                .then(result => {
                    //console.log(result)
                    //return res.send(result);
                    return res.send({ result: result });
                });
        }
    };
};