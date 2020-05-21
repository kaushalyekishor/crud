var express = require('express');
const router = express.Router();
var notecontroller = require('../controller/note.controller');
const expressValidator = require('express-validator');
router.use(expressValidator())

router.post('/', notecontroller.note_create);
router.get('/', notecontroller.findNotes);
//router.delete('/',notecontroller.deleteOne);
module.exports = router