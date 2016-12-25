let port = process.env.PORT || 3000;
let connection = process.env.MONGODB_URI || "mongodb://localhost/beerme";
let url = process.env.NODE_ENV || "http://localhost:3000";

module.exports = {
    rootUrl: url,
    connectionString: connection,
    port: port
};