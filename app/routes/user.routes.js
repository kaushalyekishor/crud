var express = require('express');
const router = express.Router();
const expressValiodator = require('express-validator'); 
var noteController = require('../controller/user.controller');
router.use(expressValiodator());

router.post('/',noteController.create_user);
router.get('/',noteController.get_user);

module.exports = router