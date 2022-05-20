const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    email: { type: String, unique: true, required: true, },
    password: { type: String, required: true, },
    confirmed: { type: Boolean, default: false, },
    activateLink: { type: String, }
});

module.exports = model('User', UserSchema);
