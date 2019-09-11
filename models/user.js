// this file is to determine the information that is going into our database

const mongoose = require('mongoose');
const Schema = mongoose.Schema; //Schema defines the structure of the database

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = User = mongoose.model('user', UserSchema);