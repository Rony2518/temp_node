// npm global command, comes with node
// npm --version

// local dependency-use it only in this particular project
// npm i <packageName>

// global dependency use it in any project
// npm install -lg <packageName>
// sudo install -g <packageName> (mac)

// package.json manifest file (stores important info about project/package)'
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const item = [1, [2, [3, [4, 5], 6]]];

const new1 = _.flattenDeep(item);
console.log(new1);
