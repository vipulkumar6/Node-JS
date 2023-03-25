const fs = require("fs");
const http = require("http");



const server = http.createServer((req, res) => {
    // res.end("Yout Response")
});



server.on('request', (req, res) => {
    fs.readFile("input.txt", (err, data) => {
        if (err)
            return console.log(err)
        else
            res.end(data.toString());
    })
})
server.listen(8000, "127.0.0.1", () => {
    console.log("Your server is running on 8000... ");
})