const express = require('express');
const Order = require('../models/order');
const { saveOrder } = require('../controllers/orderController');
const router = express.Router();

router.post('/orders', saveOrder);

router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
    }
});

router.get('/orders/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch order', error: error.message });
    }
});

router.put('/orders/:id/accept', async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, { status: 'Accepted' }, { new: true });
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Failed to accept order', error: error.message });
    }
});

router.put('/orders/:id/reject', async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, { status: 'Rejected' }, { new: true });
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Failed to reject order', error: error.message });
    }
});


module.exports = router;