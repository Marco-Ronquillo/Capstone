const Order = require('../models/order.js');

const saveOrder = async (req, res) => {
    try {
        const { name, number, email, appointmentDate, items } = req.body;

        // Create a new order
        const newOrder = new Order({
            name,
            number,
            email,
            appointmentDate,
            items,
        });

        // Save the order to the database
        await newOrder.save();

        // Send a success response
        res.status(201).json({ message: 'Order saved successfully!', order: newOrder });
    } catch (error) {
        console.error('Error saving order:', error);
        res.status(500).json({ message: 'Failed to save order', error: error.message });
    }
};

module.exports = { saveOrder };