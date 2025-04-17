const mongoose = require('mongoose');


const PublisherSchema = new mongoose.Schema({
    name: String,
    publishedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book'}],
}, { timestamps: true });

module.exports = mongoose.model("Publisher", PublisherSchema);