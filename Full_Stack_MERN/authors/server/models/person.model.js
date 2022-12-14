const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: ["First Name is required"],
        minlength: [3, "First Name must be at least 3 characters"]
    },
    lastName: { 
        type: String, 
        required: ["Last Name is required"],
        minlength: [3, "Last Name must be at least 3 characters"]
    }
}, { timestamps: true });
module.exports.Person = mongoose.model('Person', PersonSchema);

