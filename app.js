//local
//npm i [package name]

//global
//npm install -g [package name]


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)



//Joe Biden will be the WINNER