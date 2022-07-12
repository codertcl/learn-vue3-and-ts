//ES Module
import {sum} from './js/math.js'
// commonjs
const {priceForamt} = require('./js/format.js')

console.log(sum(11, 12))
console.log(sum(1, 20))
console.log(sum(1, 20))
console.log(sum(1, 20))
console.log(priceForamt())
