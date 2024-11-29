const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    username: String,
    age: String,
    gender: String,
    contact: String,
    guardian: String,
    address: String,
    email: String,
    password: String
})

const patientModel = mongoose.model("patients", patientSchema)
module.exports = patientModel