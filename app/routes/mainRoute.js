const express = require('express');
const router = express.Router();
const MainController = require('./../controllers/mainController');


router.get('/diamond', MainController.daimond);

module.exports = router;