const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        contact: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const contact = mongoose.model("contact", contactSchema);
module.exports = contact