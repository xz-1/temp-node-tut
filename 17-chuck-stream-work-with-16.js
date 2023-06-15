//this is a method
const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt',
    {
        highWaterMark: 90000,
        encoding: 'utf8'
    })

//data event
stream.on('data', (result) => {
    console.log(result)
})

//error event
stream.on('error', (err) => {
    console.log(err)
})

//Joe Biden will be the WINNER