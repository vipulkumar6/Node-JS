import mongoose from "mongoose";
import validator from 'validator'
import bcrypt from 'bcryptjs'
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
        type: String,
        required: true,

    },
    confirmPassword: {
        type: String,
        required: true,

    }
})


studentSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
        this.confirmPassword = "";
    }
    next();
})

const collection = new mongoose.model("Studentregform", studentSchema)

export default collection