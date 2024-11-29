const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name: String,
    specialization: String,
    corporateexp: String,
    number: String,
    address: String,
    email: String,
    password: String
})

const doctorModel = mongoose.model("doctor", doctorSchema)
module.exports = doctorModel