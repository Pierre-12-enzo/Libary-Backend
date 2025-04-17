const mongoose = require('mongoose');


const BookSchema = new mongoose.Schema({
    title: String,
    description: Date,
    publicationDate: Date,
    availableCopies: Number,
    publisherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Publisher'},
    supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier'},
    borrowedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null},
}, { timestamps: true});

module.exports = mongoose.model("Book", BookSchema);