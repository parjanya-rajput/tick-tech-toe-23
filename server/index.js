const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require('./models/Employee')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/ticktecktoe");



app.post("/", (req,res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success");
            } else {
                res.json("The Password is Incorrect ");
            }
        }else{
            res.json("No record Existed ");
        }
    })
    .catch (err => res.json(err))
})



app.post('/', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})




app.listen(3002, () => {
        console.log("Server is run");
});