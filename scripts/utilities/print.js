'use strict';

const chalk = require('chalk');

/* eslint-disable no-console */
exports.print = (message) => {
  const PREFIX = chalk.reset.inverse.bold.green(' GENERATOR ');

  console.log(PREFIX, message);
};

exports.dev = (message) => {
  const PREFIX = chalk.reset.inverse.bold.white(' DRY ');

  console.log(PREFIX, message);
};

exports.list = (title, items) => {
  const PREFIX = chalk.reset.inverse.bold.cyan(' TODO ');

  console.log(PREFIX, title);
  console.log();

  items.forEach((item) => {
    console.log(item);
  });

  console.log('');
};

exports.question = (message) => {
  const PREFIX = chalk.reset.inverse.bold.magenta(' QUESTION ');

  console.log(PREFIX, message);
};
