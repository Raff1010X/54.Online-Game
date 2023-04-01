const express = require('express');
const router = express.Router();
const onlinegame = require('../controllers/onlinegame');

router.route('/calculate').post(onlinegame.calculate);

module.exports = router;
