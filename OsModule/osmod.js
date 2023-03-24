const os = require("os");

console.log(os.arch());

const freemem = os.freemem();
const totalMem = os.totalmem();

console.log(`${freemem / 1024 / 1024 / 1024}`);
console.log(`${totalMem / 1024 / 1024 / 1024}`);

console.log(os.hostname());

console.log(os.platform()); 