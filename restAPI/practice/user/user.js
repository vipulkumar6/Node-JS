
import exp from 'constants';
import express from 'express';
import mongoose from 'mongoose';
import validator from 'validator'
const app = express();



// defining the user schema or db struture
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    course: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not a valid email")
            }
        }
    },
    rn: Number

})

// creatign the collection 


const collection = new mongoose.model("user", userSchema);


export default collection
