var User = require('../models/user.model');

exports.createUser = (req, res) =>{
    if(!req.body.name){
        return res.status(400).send({
            message: 'user content not be emplty'
        })
    }
    const user = new User({
        name: req.body.name,
        city: req.body.city,
        DOB: req.body.DOB,
        age: req.body.age
    })
    user.save()
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || 'something error occured'
            })
        })
    }
    
    