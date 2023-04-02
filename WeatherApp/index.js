const http = require("http");


const api = "https://api.openweathermap.org/data/2.5/weather?q=pune&appid=e098cb9deaf5b4a9b774d6d808ccd785"
const server = http.createServer((req, res) => {
    console.log("running")
});
server.listen(8000, () => {
    console.log("Sever runnign on port number 8000")
})