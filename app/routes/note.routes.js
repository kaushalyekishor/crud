var express = require('express');
const router = express.Router();
var notecontroller = require('../controller/note.controller');
const expressValidator = require('express-validator');
router.use(expressValidator());

router.post('/unique',notecontroller.note_check);
router.post('/', notecontroller.note_create);
router.get('/', notecontroller.findNotes);
router.get('/:id',notecontroller.findOne);
router.put('/:id',notecontroller.updateNote);
router.delete('/:id',notecontroller.delete_note);
module.exports = router