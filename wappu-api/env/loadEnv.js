let dotEnv = require('dotenv');

// Set default to "development"
const nodeEnv = process.argv[2] || 'development';
const result = dotEnv.config({
    path: `./env/${nodeEnv}.env`,
});

if (result.error) {
    throw result.error;
}
