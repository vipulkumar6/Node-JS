const fs = require("fs");

fs.writeFile("read.txt", "Today is Awesome ! ",
    (err) => {
        console.log(err);
    }
)

fs.appendFile("read.txt", "Welcome to my node tutorial", (err) => {
    console.log("Task Completed");
    console.log(err)
})


fs.readFile("read.txt", (err, data) => {
    console.log("Data has been read!");
    console.log(data.toString())
})
// console.log(data);