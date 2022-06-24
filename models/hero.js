var mongoose = require('mongoose')
var Schema = mongoose.Schema

var usersSchema = new Schema({
    title: String,
    nick: {
        type: String,
        unique: true,
        require: true
    },
    avatar: String,
    desc: String,
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports.Users = mongoose.model("Users", usersSchema)