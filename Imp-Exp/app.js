

const add = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}

// this 

// module.exports.add = add;
// module.exports.sub = sub;
// or this 

module.exports = { add, sub };