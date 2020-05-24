const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    city: String,
    DOB : Date,
    /*DOB: {
        day: {
          type: Number
        },
        month: {
          type: Number
        },
        year: {
          type: Number
        }},*/
    age: Number
},{
    timestamps: true
});

module.exports = mongoose.model('User',userSchema);