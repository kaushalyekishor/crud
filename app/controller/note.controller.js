const noteService = require('../services/note.services')
exports.note_create = function(req, res, next){
    try {
        req.assert('name','name mast be atlest 3 character').len(3);
        req.assert('city','city should not be empty').notEmpty();
        var errors = req.validationErrors();

        if (errors) {
            return res.status(400).send(errors);
        } else {
            noteService.createNote(req, res)
        }
    } catch(error) {
        res.send(error)
    }
}

exports.findNotes = function(req, res){
    return noteService.findNotes(req, res)
}
/*
exports.deleteOne = function(req, res){
    return noteService.deleteOne(req, res)
}*/