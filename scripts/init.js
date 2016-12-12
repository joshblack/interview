'use strict';

const inquirer = require('inquirer');
const scaffold = require('./utilities/scaffold');

const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'What kind of package are you looking to generate?',
    default: 'data-structure',
    choices: [
      'data-structure',
      'algorithm',
      'question',
    ],
  },
  {
    type: 'input',
    name: 'name',
    message: 'What\'s the ending name for this package? (Example: data-structure + graph -> data-structure-graph)',
  },
  {
    type: 'confirm',
    name: 'dry',
    message: 'Is this a dry run for the generator?',
    default: false,
  }
];

inquirer.prompt(questions).then(scaffold);
