const express = require('express');
const router = express.Router();
const onlinegame = require('../controllers/onlinegame');

router.route('/calculate').post(onlinegame.calculate);
router.route('/calculate').get(onlinegame.calculate);

module.exports = router;
