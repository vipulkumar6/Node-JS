// Importing module
const chalk = require("chalk");
const validator = require("validator");

const res = validator.isEmail("vipul@vipul");

console.log(res ? chalk.green("This is an Email") : chalk.red("Not an Email"));
// Printing the text
// console.log(chalk.red("Chauhan"))
// console.log(chalk.red.underline("Vipul"))
// console.log(chalk.red.underline.bold("GFG"))

// console.log("object")


const danger = chalk.red;
const success = chalk.green.bold;

console.log(danger("Please fill your data in correct way!"))
console.log(success("Your data is in correct format !"))

console.log(danger("Hello"))