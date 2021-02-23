const fs = require('fs')
const x = fs.readFileSync('notes.txt')
console.log(x.toString())
