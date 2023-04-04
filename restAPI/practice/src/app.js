import express from 'express'
const port = process.env.PORT || 3000
const app = express();
import '../db/conn.js';
import collection from '../user/user.js'
import { connect } from 'mongoose';

app.use(express.json())


/// ======== POST
// app.post("/user", async (req, res) => {
//     try {
//         const doc = new collection(req.body)
//         const result = await doc.save();
//         res.status(201).send(result);
//         console.log(result)
//     }
//     catch (e) {
//         res.status(400).send(e);
//     }
// })


// getting data with normal form 
// app.get("/user", async (req, res) => {
//     try {
//         const doc = await collection.find();
//         console.log(doc);
//         res.status(200).send(doc);
//     } catch (e) {
//         console.log(e);
//     }
// })

// getting data with id  == GET

// app.get("/user/:id", async (req, res) => {
//     try {
//         const _id = req.params.id;
//         console.log(_id)

//         const data = await collection.findById(_id);
//         // console.log(doc);
//         res.status(200).send(data);
//     } catch (e) {
//         console.log(e);
//     }
// })




///========== PATCH == update the students

// app.patch("/user/:id", async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const data = await collection.findByIdAndUpdate(_id, req.body, { new: true });


//         res.status(200).send(data);
//     } catch (e) {
//         console.log(e)
//     }
// })




// app.patch("/user/:name", async (req, res) => {
//     try {
//         const name = req.params.name;
//         console.log(name)
//         const data = await collection.findOneAndUpdate(name, req.body, { new: true, });
//         // const data = await collection.findByIdAndUpdate(_id, req.body, { new: true });


//         res.status(200).send(data);
//     } catch (e) {
//         console.log(e)
//     }
// })




// =========== Delete the data -    DELETE





app.delete("/user/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        // console.log(name)
        const data = await collection.findByIdAndDelete(_id, req.body, { new: true, });
        // const data = await collection.findByIdAndUpdate(_id, req.body, { new: true });


        res.status(204).send(data);
    } catch (e) {
        console.log(e)
    }
})




// inserting data

// const enterDoc = async () => {
//     try {
//         const doc = new collection({
//             name: "Vipul",
//             course: "Btech",
//             email: "vipul@gmail.com",
//             rn: 61
//         })

//         const res = await doc.save();
//         console.log(res);
//     }
//     catch (e) {
//         console.log(e)
//     }
// }
// enterDoc();
app.listen(port, () => [
    console.log(`server is runnig at ${port}`)
])

