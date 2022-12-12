const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
        lowercase: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please add a password"]
    },
})

module.exports = mongoose.model("User", userSchema);