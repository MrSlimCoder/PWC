const utils = require("../utils");

exports.health = function (req, res) {
    const data = utils.health();
    res.send('Server is healthy');
}

exports.sum = function (req, res) {
    const data = utils.sum(1, 2);
    res.status(200).json({
        data: data
    });
}