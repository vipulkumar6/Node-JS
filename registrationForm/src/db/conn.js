import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/regForm", {
}).then(() => {
    console.log("Connection Successful")
}).catch((e) => {
    console.log(e)
})