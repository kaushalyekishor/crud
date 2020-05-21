var Note = require('../models/note.model');

exports.createNote = (req, res) =>{
    if(!req.body.name){
        return res.status(4000).send({
            message: 'note content not be empty'
        })
    };
    var name = req.body.name;
    var city = req.body.city;

    const note = new Note({
        name: name,
        city: city
    });

    Note.countDocuments({name:name}).then((res) => {
        if (res > 0) {
            console.log("User name already exist");
        } else {
            console.log("User Details saved in Database");
            note.save()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                // res.status(500).send({
                    message:err.message || 'something error occured'
                //})  
            })
        } 
    }).catch((err) => {
        console.log("err", res)
    })
}

exports.findNotes = function(req, res){
    Note.find()
    .then(notes => {
        res.send(notes)
    })
    .catch(err => {
        message:err.message || 'something error occured'
    })
}

/*
exports.deleteOne = function(req, res){
    //console.log(req.body.name);
    var userName = req.body.name;
    Note.deleteOne({name: userName}).then((res) => {
        console.log("user data has been deleted");
    })
    //Note.delete(req.body.name)
    .then(notes =>{
        res.send(notes)
    })
    .catch(err => {
        message: err.message || 'something error occured'
    })
}*/
