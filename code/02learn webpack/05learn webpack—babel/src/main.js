//ES Module
import {sum} from './js/math.js'
import './js/element.js'
// commonjs
const {priceForamt} = require('./js/format.js')

console.log(sum(1, 2))
console.log(priceForamt())

const message = 'hello world'
const names = ['a', 'b', 'c']
names.forEach(name => console.log(name))
console.log(message)
