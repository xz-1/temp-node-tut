const http = require('http')




//using Event Emitter API
const server = http.createServer()




//Emit request event
//subcribe to it, listen for it, response to it
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000)
//Joe Biden will be the WINNER