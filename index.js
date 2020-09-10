const randomColor = require('randomcolor');
const colors = require('colors');
const chalk = require('chalk');
let strHash = '';
let strHashSpace = '';
let strHashSpaceHex = '';
let userColor = '';
let userLuminosity = '';
let color = randomColor();
userColor = process.argv[2];
userLuminosity = process.argv[3];

if (userColor != '' && userLuminosity != '') {
  let color = randomColor({
    hue: userColor,
    luminosity: userLuminosity,
  });
} else if (userColor != '') {
  let color = randomColor({
    hue: userColor,
  });
} else if (userColor != '') {
  let color = randomColor({
    luminosity: userLuminosity,
  });
}

//init string
for (let i = 0; i < 31; i++) {
  strHash += '#';
}
//init string with space
for (let i = 0; i < 8; i++) {
  strHashSpace += '#';
  strHashSpaceHex += '#';
}
for (let i = 0; i < 15; i++) {
  strHashSpace += ' ';
}
for (let i = 0; i < 8; i++) {
  strHashSpace += '#';
}
//init string with space and color
for (let i = 0; i < 4; i++) {
  strHashSpaceHex += ' ';
}
strHashSpaceHex += color;

for (let i = 0; i < 4; i++) {
  strHashSpaceHex += ' ';
}
for (let i = 0; i < 8; i++) {
  strHashSpaceHex += '#';
}
//print
for (let i = 0; i < 3; i++) {
  console.log(chalk.hex(color)(strHash));
}
console.log(chalk.hex(color)(strHashSpace));
console.log(chalk.hex(color)(strHashSpaceHex));
console.log(chalk.hex(color)(strHashSpace));
for (let i = 0; i < 3; i++) {
  console.log(chalk.hex(color)(strHash));
}
