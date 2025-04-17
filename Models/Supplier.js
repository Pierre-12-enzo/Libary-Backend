const mongoose = require('mongoose');


const SupplierSchema = new mongoose.Schema({
    name: String,
    suppliedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
}, { timestamps: true });


module.exports = mongoose.model("Supplier", SupplierSchema);
