/* globals require, module, process */
const crypto = require("crypto");

module.exports = function(password) {
    return crypto.createHmac('sha256', "salt")
        .update(password)
        .digest('hex');
};