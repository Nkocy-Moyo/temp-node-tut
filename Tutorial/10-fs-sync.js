const { readFileSync, writeFileSync } = require('fs')

// const fs = require('fs') //This method is the same as the above just different syntaxes
// fs.readFileSync

// Reading Files
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first, second)

// Writing to FileSystem or creating a file
writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`)  //This method overwrites everything if the file exists

//To append use {flag: a}
writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`, {flag: a}) //This will append the new text to the existing one

