// const url = "https://dummyjson.com/http/404/Hello_Peter"


const http = require("http");
const fs = require("fs")
const server = http.createServer((req, res) => {
    if (req.url == "/about") {
        res.end("Welcome to about section");
    }
    else if (req.url == "/contact") {

        res.end("Welcome to Contact section");
    }
    else if (req.url == "/") {
        res.end("Welcome to home section");
    }
    else if (req.url == "/userapi") {
        fs.readFile("./api.json", "utf-8", (err, data) => {

            // console.log(data)
            // res.end(data)
            const objData = JSON.parse(data);

            res.writeHead(200, { "Content-Type": "application/json" });

            // res.end(objData[0].id)
            console.log(objData[0].title)
            res.end(objData[1].title)
            // res.end("Welcome to API section");
        }
        )
    }
    else {
        // res.writeHead(404, { "Content-type": "text/html" });

        res.end("<h1>does not exits</h1>")
    }
})
// const port = 8000;
server.listen(8000, "127.0.0.1", () => {
    console.log(`Sever run on port no 8000`)
})
// console.log("hello")