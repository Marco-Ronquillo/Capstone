const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: String, required: true },
    email: { type: String, required: true },
    appointmentDate: { type: String, required: true },
    items: [
        {
            name: { type: String, required: true },
            category: { type: String, required: true },
            subcategory: { type: String },
            quantity: { type: Number, default: 1 },
        },
    ],
    status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('orders', orderSchema);