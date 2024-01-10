//Built-in Modules

const os = require('os') //Note we dont use ./ for built-in modules

//Info about current user
const user = os.userInfo()

console.log(user)

//method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(), //OS Type
    release: os.release(),  //Release
    totalMem: os.totalmem(), //Total Memory
    freeMem: os.freemem() //Free Memory
}

console.log(currentOS)