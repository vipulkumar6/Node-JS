import mongoose from "mongoose";
import validator from 'validator'



//definnign thr structure and schema of the database
const stdSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true
        },
        email: {
            type: String,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error("Not a Valid Email")
                }
            },

        },
        college: String

    }
)


// creating the colections



const collection = new mongoose.model("studentRegistration", stdSchema);


// const createDoc = async () => {
//     try {
//         const doc = new collection({
//             name: "Vipul",
//             email: "vipul@gmail.com",
//             college: "Graphic Era Hill University"
//         })
//         const res = await doc.save();
//         console.log(res)
//     }
//     catch (err) {
//         console.log(err)
//     }

// }

// const gettingDoc = async () => {
//     try {
//         const res = await collection.find();
//         console.log(res)
//     }
//     catch (err) {
//         console.log(err)
//     }
// }
// createDoc();
// gettingDoc();
export default collection;