var User = require('../models/user.model');

exports.create_user = (req, res) =>{
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
            console.log(user.DOB);
            
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || 'something error occured'
            })
        })
    }  


    exports.get_user = function(req, res){
        User.find()
          .then(users => {
              res.send(users)
          })
          .catch(err =>{
              message: err.message || 'something error occured'
          })
    }
    
    exports.createUniqueRecord = function(req, res){
        User.findOne({name: req.body.name})
           .then((user) =>{
                if(user){
                    res.send({
                        message:'user already exist'
                    })
                } else{
                    const user = new User({
                        name:req.body.name,
                        city:req.body.city,
                        DOB:req.body.DOB,
                        age:req.body.age
                    })
                    user.save()
                        .then(data =>{
                            res.send(data)
                        })
                        .catch(err =>{
                            res.status(500).send({
                                message: err.message || 'something error occured'
                            })
                        })
                }
           })
    }

    exports.update_user = function(req, res){
        User.findOne({name: req.body.name})
            .then((user) =>{
                if (user) {
                    user.updateOne()
                    .then(data =>{
                        //console.log(user);
                        res.send(data)
                    })
                    .catch(err =>{
                        res.status(500).send({
                            message: err.message || 'something error occured'
                        })
                    })
                } else {
                    res.send({
                        message:'somethin error occured'
                    })
                } 
            })
    } 

    exports.delete_user = (req, res)=>{
        Note.findByIdAndRemove(req.params.id)
            .then(status =>{
                if(status){
                    res.send({
                        message:'Record deleted successfully'
                    })
                }
                else{
                    res.send({
                        message:'Record Not Found'
                    })
                }
            }).catch(err =>{
                res.send(err);
            })
    }
                