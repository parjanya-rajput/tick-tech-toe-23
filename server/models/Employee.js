const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
   
    email:String,
    password:String,
    password1:String
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeModel