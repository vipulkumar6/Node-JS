const fs = require("fs");

fs.writeFileSync("bio.txt", "My name is Vipul ");

fs.appendFileSync("bio.txt", "MY DOB is 10/05/2002");


const data = fs.readFileSync("bio.txt", "utf-8");
console.log(data);

// fs.renameSync("mybio.txt", "bio.txt");

fs.unlinkSync("./bio.txt")
fs.rmdirSync("/Vipul");