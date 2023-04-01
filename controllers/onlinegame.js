const onlinegame = require('../models/onlinegame');

exports.calculate = (req, res, next) => {
    const response = onlinegame.calculate(req.body);
    res.status(200).send(response);
};