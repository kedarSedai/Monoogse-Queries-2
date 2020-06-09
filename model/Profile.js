const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    firstName:{type:String, trim:true, default:''},
    lastName:{type:String, trim:true, default:''},
    age:{type:Number, default:0},
    team:{type:String, trim:true, default:''},
    position:{type:String, trim:true, default:''}
});

module.exports = mongoose.model('profile', profileSchema);