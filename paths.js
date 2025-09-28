const path = require('path');

const rootDir = __dirname;
const clientDir = path.join(rootDir, './client');

module.exports = {
    root: rootDir,
    client: clientDir,
}
