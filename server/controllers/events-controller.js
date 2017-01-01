/* globals module */

module.exports = function(params) {
    let { data } = params;

    return {
        getAllEvents(req, res) {
            data.getAllEvents()
                .then(allEvents => {
                    //console.log(allEvents);
                    res.json({ data: allEvents })
                })
                .catch(err => {
                    res.json(err);
                });
        },
        getEventsById(req, res) {
            data.getEventsById(req.params.id)
                .then((events) => {
                    //console.log(events);
                    res.json({ data: events });
                })
                .catch(err => {
                    res.json(err);
                });
        }
    };
};