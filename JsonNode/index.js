// const bio = {
//     name: "Vipul",
//     age: 21,
//     college: "University",
//     City: "Dehradun"
// }

// console.log(bio.City);

// // Object to JSON
// const jsonData = JSON.stringify(bio);
// console.log(jsonData)

// // JSON to Object

// const objData = JSON.parse(jsonData);

// console.log(objData);

// console.log(objData.age);


/*
  1. Convert to JSON
  2. Add data into another file
  3. readfile
  4. agian convert back to JSON object
  5. display
*/



const bio = {
    name: "Vipul",
    age: 21,
    college: "University",
    City: "Dehradun"
}

const fs = require("fs");

// 1. Convert to JSON


const jsonData = JSON.stringify(bio);

// 2. Add data into another file


fs.writeFile("data.json", jsonData, (err) => {
    console.log(err)
})



// 3. readfile
// 4. agian convert back to JSON object
// 5. display

fs.readFile("data.json", "utf-8", (err, data) => {
    console.log(data)

    const orignalData = JSON.parse(data);
    console.log(orignalData.City)
})