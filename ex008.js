const BigDecimal = require('bigdecimal').BigDecimal;

const num1 = new BigDecimal('123.456789');
const num2 = new BigDecimal('987.654321');

const sum = num1.add(num2);
const product = num1.multiply(num2);

console.log(sum.toString());      // Saída: 1111.111110
console.log(product.toString());  // Saída: 121932.631485012669