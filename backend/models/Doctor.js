import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true
    },

    password: {
        type: String,
        required: true,
        select: false
    },

    name: {
        type: String,
        required: true,
        trim: true,
    },

})