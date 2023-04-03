import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost:27017/userRegister", {
    useNewUrlParser: true,
})
    .then(() => {
        console.log("Connection Successful")
    })
    .catch((e) => {
        console.log(e)
    })
// export default conn;