import express from 'express'
const app = express();
import path from 'path'
import ejs from 'ejs'
import './db/conn.js'
import collection from './models/student.js';
import { cp } from 'fs';
import swal from 'sweetalert';

const port = process.env.PORT || 3000

// alert("hello")
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
// const pathView = path.join(process.cwd(), '../views');
// app.use(express.static(pathView))
// app.set('view', pathView)


const temp_path = path.join(process.cwd(), '../templates/views')
app.set('views', temp_path)
app.set("view engine", 'ejs')
swal("Oops!", "Something went wrong!", "error");


app.post("/register", async (req, res) => {
    console.log(req.body.name)

    try {
        const pass = req.body.password;
        const cpass = req.body.confirmPassword;
        if (pass === cpass) {
            const student = new collection({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                confirmPassword: req.body.confirmPassword,
            })

            const data = await student.save();
            res.status(201).render('index');
        }
        else {
            res.send("Password does't match")
        }
    }
    catch (e) {
        console.log(e)
    }
    // const doc = new collection(req.body);


    // const result = await doc.save();
    // res.status(201).send(result);
    // console.log(doc);
})

app.get("/", (req, res) => {
    res.render('index');
    // swal("Have a nice day!");

})
app.get("/register", (req, res) => {
    res.render('register');
})


app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})