const fs = require('fs-extra');
const childProcess = require('child_process');
const spawn = require('child_process').spawn;

// remove current build, and create new one
fs.removeSync('./dist/');

// transpile the typescript files
tsc = spawn('tsc', ['--build', 'tsconfig.prod.json']);
tsc.stdout.on('data', data => {
  console.log(data.toString());
});

tsc.stderr.on('data', data => {
  console.err(data.toString());
});

