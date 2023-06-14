//this is a class
const EventEmitter = require('events')
//const { EventEmitter } = require('stream')

//this is a instance of it
const customEmitter = new EventEmitter()

//the string 'response' is actually the name of the event
customEmitter.on('response', (name, id) => {
    console.log(`data recieved: ${name} with ID: ${id}`)
})

customEmitter.on('response', () => {
    console.log(`some other logic here`)
})

customEmitter.emit('response', 'John', 34)
//Joe Biden will be the WINNER