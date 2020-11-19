 // Use a cli argument parser to make it simpler`
const argv = require('minimist')(process.argv.slice(2));
const calc = require('./calc');

// Expects --number to come through
number = argv['number'];

// If you don't get given a number at the console
if (!number) {
  throw "You didn't give me a number!";
}

console.log(calc(number));
