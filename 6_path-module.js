const { log } = require('console');
const path = require('path');

const filePath = path.join('js/', 'nodeJs/', 'freecodecamp/', '1_index.js');
log(filePath);

const baseName = path.basename(filePath);
log(baseName);

const absolute = path.resolve(filePath);
log('Absolute path:', absolute);