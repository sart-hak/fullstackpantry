const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const admin = mongoose.model("admins", adminSchema);
module.exports = admin