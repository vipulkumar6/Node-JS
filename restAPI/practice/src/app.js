import express from 'express'
const port = process.env.PORT || 3000
const app = express();
import '../db/conn.js';
import collection from '../user/user.js'

app.use(express.json())
app.get("/", (req, res) => {
    res.send("Hello from the home page User registertation")

})

app.post("/user", async (req, res) => {
    try {
        const doc = new collection(req.body)
        const result = await doc.save();
        res.status(201).send(result);
        console.log(result)
    }
    catch (e) {
        res.status(400).send(e);
    }
})


// inserting data

const enterDoc = async () => {
    try {
        const doc = new collection({
            name: "Vipul",
            course: "Btech",
            email: "vipul@gmail.com",
            rn: 61
        })

        const res = await doc.save();
        console.log(res);
    }
    catch (e) {
        console.log(e)
    }
}
// enterDoc();
app.listen(port, () => [
    console.log(`server is runnig at ${port}`)
])

