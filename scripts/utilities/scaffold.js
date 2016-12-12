'use strict';

const fs = require('fs-extra');
const path = require('path');
const template = require('lodash.template');
const kebab = require('kebab-case');
const { readFile, writeFile } = require('./file');
const { print } = require('./print');

const BLUEPRINTS_PATH = path.resolve(__dirname, '../blueprints');

const scaffold = ({ type, name, dry }) => new Promise((resolve, reject) => {
  const options = {
    type,
    name,
    package: {
      name: kebab(name.split(' ').join('')),
    },
  };

  const BLUEPRINT_PATH = path.resolve(BLUEPRINTS_PATH, type);
  const OUTPUT_PATH = path.resolve(
    __dirname,
    '../../packages',
    `${type}${options.package.name}`
  );

  print(`Creating the project at: ${OUTPUT_PATH}`);

  const source = fs.walkSync(BLUEPRINT_PATH).map(
    (file) => new Promise((resolve, reject) => {
      readFile(file)
        .then(({ source }) => {
          resolve({
            name: template(file)(options),
            source: template(source)(options),
          });
        })
        .catch(reject);
    })
  );

  const writeFiles = (files) => files.map((file) => new Promise((resolve, reject) => {
    const { name, source } = file;
    const outputFileName = name.replace(BLUEPRINT_PATH, OUTPUT_PATH);


    if (dry) {
      print(`Dry-run for file: ${outputFileName}`);
      return resolve();
    }

    print(`Writing file: ${outputFileName}`);

    writeFile(outputFileName, source)
      .then(resolve)
      .catch(reject);
  }));

  Promise.all(source)
    .then(writeFiles)
    .catch(reject);
});

module.exports = scaffold;
