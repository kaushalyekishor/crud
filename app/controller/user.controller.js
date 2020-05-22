const userService = require('../services/user.services');

exports.user_create = function(req, res, next){
    try{
        req.assert('name','name should be atleast 3 character').len(3);
        req.assert('city','city should not be empty').notEmpty();
        req.assert('DOB','Please fill DOB, should not be emplty').notEmpty();
        req.assert('age','Please fill age, should not be empty').notEmpty();

        var errors = req.validationErrors();

        if(errors){
            return res.status(400).send(errors);
        } else{
            userService.user_create(req, res)
        }
    } catch(error){
        res.send(error)
    }
}