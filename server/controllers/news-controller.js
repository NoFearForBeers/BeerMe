/* globals module */

module.exports = function(params) {
    let { data } = params;

    return {
        getAllNews(req, res) {
            data.getAllNews()
                .then(allNews => {
                    console.log(allNews);
                    res.json({ data: allNews })
                })
                .catch(err => {
                    res.json(err);
                });
        },
        getNewsById(req, res) {
            data.getNewsById(req.params.id)
                .then((news) => {
                    //console.log(news);
                    res.json({ data: news });
                })
                .catch(err => {
                    res.json(err);
                });
        }
    };
};