const onlinegame = require('../models/onlinegame');
const example = require('../example/example_request.json')

exports.report = (req, res, next) => {
    const data = req.body;
    if (!data) data = example;
    const response = onlinegame.calculate(data);
    res.status(200).send(response);
};