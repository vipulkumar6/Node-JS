import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/newStudent", {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}


).then(() => {
    console.log("Connection Successful !")
}).catch((err) => {
    console.log("error ", err)
})