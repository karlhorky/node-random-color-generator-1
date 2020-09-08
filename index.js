const randomColor = require('randomcolor');
const color = randomColor();
const colors = require('colors');
const chalk = require('chalk');
let str = '';
let str1 = '';
let str2 = '';
//init string
for (let i = 0; i < 31; i++) {
  str += '#';
}
//init string with space
for (let i = 0; i < 8; i++) {
  str1 += '#';
  str2 += '#';
}
for (let i = 0; i < 15; i++) {
  str1 += ' ';
}
for (let i = 0; i < 8; i++) {
  str1 += '#';
}
//init string with space and color
for (let i = 0; i < 4; i++) {
  str2 += ' ';
}
str2 += randomColor();
for (let i = 0; i < 4; i++) {
  str2 += ' ';
}
for (let i = 0; i < 8; i++) {
  str2 += '#';
}
//print
for (let i = 0; i < 3; i++) {
  console.log(chalk.hex(color)(str));
}
console.log(chalk.hex(color)(str1));
console.log(chalk.hex(color)(str2));
console.log(chalk.hex(color)(str1));
for (let i = 0; i < 3; i++) {
  console.log(chalk.hex(color)(str));
}
//console.log(randomColor());
//console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
//console.log(chalk.hex('#008f68')('Alligators Rock!'));
//const x = randomColor();
//console.log(chalk.hex(x)('Alligators Rock!'));
