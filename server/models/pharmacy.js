const mongoose = require('mongoose')

const pharmacySchema = new mongoose.Schema({
    name: String,
    type: String,
    stock: String,
    available: String
})

const pharmacyModel = mongoose.model("medicine", pharmacySchema)
module.exports = pharmacyModel