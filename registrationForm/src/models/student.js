import mongoose from "mongoose";
import validator from 'validator'
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
    },
    email: {
        type: String,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not a valid email!")
            }
        }
    },
    phn: {
        type: Number,
        minLength: 10
    },
    password: {
        type: Number,
        required: true,

    },
    confirmPassword: {
        type: Number,
        required: true,

    }
})


const collection = new mongoose.model("Studentregform", studentSchema)

export default collection