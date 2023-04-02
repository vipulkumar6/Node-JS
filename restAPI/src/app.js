import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.post("/", (req, res) => {
    res.send("Hello From the other side -REST API")
})

app.get("/", (req, res) => {
    res.send("Hello Rest API")
})
app.listen(3000, () => {
    console.log(`Server is runnig at ${port}`)
})