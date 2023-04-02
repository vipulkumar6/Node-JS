import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import './db/conn.js'
import collection from './models/student.js'
// const collection = require("./models/student")
app.use(express.json())
// create a new student

// using promises

// app.post("/student", (req, res) => {
//     // console.log(req.body);
//     const doc = new collection(req.body);
//     // doc.save();
//     doc.save().then(() => {
//         res.status(201).send(doc)
//         // console.log(res)
//     })
//         .catch((e) => {
//             res.status(400).send(e)
//             // console.log("Error hai bhai ", e)
//         })
//     // res.send("Hello from the other side- API")

// })
// using async and await 


// // sending data 
// app.post("/student", async (req, res) => {
//     try {
//         const doc = new collection(req.body);
//         const ans = await doc.save();
//         res.status(201).send(ans)
//     }
//     catch (e) {
//         res.status(400).send(e)
//     }
// })


// getting data from db
app.get("/student", async (req, res) => {
    try {
        const conn = await collection.find({ name: "Sumit" });
        res.status(201).send(conn);
    }
    catch (e) {
        res.status(400).send(e)
    }
})
app.listen(3000, () => {
    console.log(`Server is running at ${port}`)
})