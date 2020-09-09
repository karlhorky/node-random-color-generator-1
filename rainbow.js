const randomColor = require('randomcolor');
//let color = randomColor();
const colors = require('colors');
const chalk = require('chalk');
let hue_c = '';
let hue_l = '';
//let check_1 = 0;
//let check_2 = 0;
//const hue_c = process.argv[2];
//const hue_l = process.argv[3];
let str = '';
let str1 = '';
let str2 = '';
/*
const arr_col = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'pink',
  'monochrome',
];

const arr_lum = ['bright', 'light', 'dark'];

for (let i = 0; i < 8; i++) {
  if ((process.argv[2] = arr_col[i])) {
    check_1 = 1;
  }
}

for (let i = 0; i < 3; i++) {
  if ((process.argv[3] = arr_lum[i])) {
    check_2 = 1;
  }
}
*/
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
if (process.argv[2] != '') {
  hue_c = process.argv[2];
}
if (process.argv[3] != '') {
  hue_l = process.argv[3];
}
const color1 = randomColor({
  hue: hue_c,
  luminosity: hue_l,
});

//if (command) {
//color == command;
//} else {
//  ('Print please name of the color');
//}

for (let i = 0; i < 3; i++) {
  console.log(chalk.hex(color1)(str));
}
console.log(chalk.hex(color1)(str1));
console.log(chalk.hex(color1)(str2));
console.log(chalk.hex(color1)(str1));
for (let i = 0; i < 3; i++) {
  console.log(chalk.hex(color1)(str));
}
//console.log(randomColor());
//console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
//console.log(chalk.hex('#008f68')('Alligators Rock!'));
//const x = randomColor();
//console.log(chalk.hex(x)('Alligators Rock!'));

//console.log(command);
//console.log(chalk.hex(color1)('Hello'));
