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
        createParticipation(req, res) {
            let newParticipation = JSON.parse(req.body['body']);           

            data.createParticipation(newParticipation)
                .then((data) => {
                    res.status(200).send({ success: true, data })
                })
                .catch(err => {
                    return res.status(400).send({ success: false, msg: 'Recipe was not created' });
                });
        },
    };
};