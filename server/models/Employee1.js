const mongoose = require('mongoose')

const Employee1Schema = new mongoose.Schema({
    name:String,
    gender:String,
    contact: String,
    address: String,
    addharnumber: String,
    aidneeded: String,
    total: String
})

const Employee1Model = mongoose.model("employees1", Employee1Schema)
module.exports = Employee1Model