const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    quantity: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Products', ProductSchema);