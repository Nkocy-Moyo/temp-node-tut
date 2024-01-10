const path = require('path')

console.log(path.sep)  //returns platform separator

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)  //Retuens the filePath : /content/subfolder/test.txt

const base = path.basename(filePath)
console.log(base)  //Returns the base name from a filePath : test.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)  //Returns the absolute path of test.txt: C:\Users\nkocy\OneDrive\Documents\NODE-EXPRESS\content\subfolder\test.txt

//NB: This can be useful as the file path in our computer will be different from the one where we deploy