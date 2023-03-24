console.log("Hello Node JS");

const fs = require("fs");
// creating a new file
// fs.writeFileSync("file.txt", "Welcome to my NODE tutorial");
// fs.writeFileSync("file.txt", "Hye, Welcome to my NODE tutorial 2023 ");
// fs.writeFileSync("file.txt", "Hey how are you");

// fs.appendFileSync("file.txt", "Hey How Are You!")



const buf_data = fs.readFileSync("file.txt")
console.log(buf_data.toString())