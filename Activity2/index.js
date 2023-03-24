const fs = require("fs");


// write data into bio file
fs.writeFile("bio.txt", "Hey MY name is Vipul i am a MERN Developer from India. ", (err) => {
    console.log(err);
    console.log("All are okey!")
})

// add  more data into file
fs.appendFile("bio.txt", " I live in Dehradun,UttraKhand.", (err) => {
    console.log(err)
})

// read data from bio file
fs.readFile("bio.txt", (err, data) => {
    console.log(err);
    console.log(data.toString());
})

// rename file
fs.rename("bio.txt", "mybio.txt", (err) => {
    console.log(err)
})


// delete file
// fs.unlink("/Activity2/index.js",(err)=>[
//     console.log(err)
// ])
// delete folder
fs.mkdir("/Activity2", (err) => {
    console.log(err)
})