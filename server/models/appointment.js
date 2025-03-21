const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: String, required: true },
    email: { type: String, required: true },
    appointmentDate: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Confirmed', 'Rejected'], default: 'Pending' },
    items: [
        {
            name: { type: String, required: true },
            category: { type: String, required: true },
            subcategory: { type: String },
            quantity: { type: Number, default: 1 },
        },
    ],  
});

module.exports = mongoose.model('Appointment', appointmentSchema);