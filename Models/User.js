const mongoose = require('mongoose');

const BorrowedBook = new mongoose.Schema({
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book'},
    borrowDate: { type: Date,},
    returnDate: { type: Date,},
}, { _id: false});

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true},
    role: { type: String, enum: ['student', 'teacher', 'admin'], required: true },
    gender: { type: String, enum: ['male', 'female'], required: true},
    district: { type: String, required: true},
    borrowedBooks: [{BorrowedBook}],
}, { timestamps: true});

module.exports = mongoose.model("User", UserSchema);