var express = require('express');
const router = express.Router();
var notecontroller = require('../controller/note.controller');
const expressValidator = require('express-validator');
router.use(expressValidator());

router.post('/unique',notecontroller.note_check);
router.post('/', notecontroller.note_create);
router.get('/', notecontroller.findNotes);
module.exports = router