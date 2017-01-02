/* globals module */

module.exports = function(params) {
    let { data } = params;

    return {
        getAllParticipations(req, res) {
            data.getAllParticipations()
                .then(allParticipations => {
                    //console.log(allParticipations);
                    res.json({ data: allParticipations })
                })
                .catch(err => {
                    res.json(err);
                });
        },
    };
};