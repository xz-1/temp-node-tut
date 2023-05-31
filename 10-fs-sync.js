const { readFileSync, writeFileSync } = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
//console.log(first, second)
writeFileSync(
    './content/combined-sync.txt',
    `This is the combined: ${first} and ${second}`,
    { flag: 'a' }
)


console.log('done with this task')
console.log('starting the next one')


//Joe Biden will be the WINNER