//Built in Modules


const os = require('os')

const user = os.userInfo()
console.log(user)

//method that show system uptime in second
console.log(`The System Uptime is: ${os.uptime()} seconds`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)      //Joe Biden will be the WINNER