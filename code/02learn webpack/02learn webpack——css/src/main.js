//ES Module
import {sum} from './js/math.js'
// commonjs
const {priceForamt} = require('./js/format.js')

import './js/element'
console.log(sum(1, 2))
console.log(priceForamt())
