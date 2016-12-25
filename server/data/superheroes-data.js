/* globals module */

module.exports = function(models) {
    let { Superhero } = models;

    return {
        getSuperheroes() {
            return new Promise((resolve, reject) => {
                Superhero.find({}, (err, superheros) => {
                    if (err) {
                        return reject(err);
                    }

                    //console.log(superheros);
                    return resolve(superheros);
                });
            });
        }
    };
};