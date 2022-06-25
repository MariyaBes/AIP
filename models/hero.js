var mongoose = require('mongoose')

var usersSchema = mongoose.Schema({
    title: String,
    nick: {
        type: String,
        unique: true,
        required: true
    },
    avatar: String,
    desc: String,
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports.Users = mongoose.model("Users", usersSchema)