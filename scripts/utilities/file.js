'use strict';

const fs = require('fs-extra');

exports.readFile = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (error, source) => {
    if (error) {
      reject(error);
      return;
    }

    resolve({
      path,
      source,
    });
  });
});

exports.writeFile = (path, source) => new Promise((resolve, reject) => {
  fs.ensureFile(path, (error) => {
    if (error) {
      reject(error);
      return;
    }

    fs.writeFile(path, source, (error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
});
