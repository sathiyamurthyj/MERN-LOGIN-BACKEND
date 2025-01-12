const mongoose = require("mongoose");

// user schema

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

// export user model

const User = mongoose.Model("User", userSchema);
module.exports = User;