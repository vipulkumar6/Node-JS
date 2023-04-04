import dotenv from 'dotenv'
dotenv.config();
import mongoose from 'mongoose';
mongoose.connect("mongodb://localhost:27017/regForm", {
}).then(() => {
    console.log("Connection Successful")
    // console.log(process.env.DB_NAME)
}).catch((e) => {
    console.log(e)
})