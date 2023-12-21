var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let codeProduct = parseInt(lines.shift())
let numberUnits = parseInt(lines.shift())
let priceUnit = parseFloat(lines.shift())
let somaValor = numberUnits * priceUnit

console.log('VALOR A PAGAR: R$ ', somaValor.toFixed(2))