//file modules
//synchrones (blocking) and asynchronous (non-blocking) functions
// const {readFileSync, writeFileSync} = require('fs');

const { log } = require("console");
const fs = require("fs");

log("start");

const firstFile = fs.readFileSync("./content/first.txt","utf8");
const secondFile = fs.readFileSync("./content/second.txt","utf8");

fs.writeFileSync(
  "js/nodeJs/freecodecamp/content/result.txt",
  `\n\n${firstFile},\n\n${secondFile}`,
  { flag: "a" }
);

log("done with task");
log("starting with next task");