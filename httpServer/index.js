// const http = require("http");
// const server = http.createServer((req, res) => {
//     if (req.url == "/about") {
//         res.end("Welcome to about section");
//     }
//     else if (req.url == "/contact") {

//         res.end("Welcome to Contact section");
//     }
//     else if (req.url == "/") {
//         res.end("Welcome to home section");
//     }
//     else {
//         res.writeHead(404, { "Content-type": "text/html" });

//         res.end("<h1>does not exits</h1>")
//     }
// })
// const port = 8000;
// server.listen(8000, "127.0.0.1", () => {
//     console.log(`Sever run on port no 8000`)
// })
// console.log("hello")