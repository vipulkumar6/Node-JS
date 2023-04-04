import dotenv from 'dotenv'
dotenv.config();
import express from 'express'

import path from 'path'
import ejs from 'ejs'
import './db/conn.js'
import collection from './models/student.js';
import { cp } from 'fs';
import swal from 'sweetalert';
import bcrypt from 'bcryptjs'
const port = process.env.PORT || '3000'

const app = express();
console.log(process.env)
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
    // console.log(req.body.name)

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
            // hasing password start in student.js

            const data = await student.save();
            res.status(201).render('login');
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


app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        console.log(password)
        const data = await collection.findOne({ email: email })


        const isMatch = await bcrypt.compare(password, data.password)
        console.log(isMatch == true)
        if (isMatch == true) {
            res.status(201).render('index');
        }
        else
            res.send("Invalid datails")
    }
    catch {
        res.send("Invalid datails")
    }
})
app.get("/", (req, res) => {
    res.render('index');
    // swal("Have a nice day!");

})
app.get("/register", (req, res) => {
    res.render('register');
})
app.get("/login", (req, res) => {
    res.render('login');
})


app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})