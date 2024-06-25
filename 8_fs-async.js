const { log } = require("console");
const fs = require("fs");

//alternative of this big code to minimize is promises and  async await.

log("start")
fs.readFile("js/nodeJs/freecodecamp/content/first.txt", "utf8", (err, data) => {//off load the task and start another task
  if (err) {
    log(err)
    return
  }
  const first = data; // first  file content we can't save data outside it as in sync
  fs.readFile(
    "js/nodeJs/freecodecamp/content/second.txt",
    "utf8",
    (err, data) => {
      if (err) {
        log(err)
        return
      }
      const second = data; // second file content
      fs.writeFile(
        "js/nodeJs/freecodecamp/content/result-async.txt",
        `${first},\n\n${second}`, // here we have access of both file data
        (err, data) => {
          if (err) {
            log(err)
            return
          }
          log("File written successfully!")
        }
      );
    }
  );
});

log("next start")