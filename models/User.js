const mongoose = require('mongoose');
const { Schema } = mongoose; // destrucutred from: const Schema = mongoose.Schema;

// Schema, blueprint for our collections
const userSchema = new Schema({
    googleId: String
});


// Model
mongoose.model('users', userSchema); // collections called users

