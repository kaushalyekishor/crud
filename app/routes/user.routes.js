var express = require('express');
const router = express.Router();
const expressValiodator = require('express-validator'); 
var userController = require('../controller/user.controller');
router.use(expressValiodator());

router.post('/unique',userController.create_unique);
router.post('/',userController.create_user);
router.get('/',userController.get_user);
router.put('/',userController.update_user);
router.delete('/',userController.delete_user);

module.exports = router