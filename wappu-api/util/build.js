const fs = require('fs-extra');
const childProcess = require('child_process');

// remove current build, and create new one
fs.removeSync('./dist/');

// TODO: fix build

// transpile the typescript files
childProcess.exec('tsc --build tsconfig.prod.json');
