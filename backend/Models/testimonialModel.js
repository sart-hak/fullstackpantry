const mongoose = require("mongoose");

const testimonialSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        position: {
            type: String,
            required: true
        },
        image: {
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

const testimonial = mongoose.model("testimonial", testimonialSchema);
module.exports = testimonial