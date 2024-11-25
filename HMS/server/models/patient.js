const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const patientModel = mongoose.model("patient", patientSchema)
module.exports = patientModel