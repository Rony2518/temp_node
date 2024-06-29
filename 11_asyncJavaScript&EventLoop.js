console.log("hello Ronak");

console.time();

for (let i = 0; i < 10000000; i++) {
  const heading = document.querySelector("h3");
  heading.textContent = "change";
}

console.timeEnd();
console.log("End Task");

console.log("First Task");

setTimeout(() => {
  console.log("Second Task");
}, 0);

console.log("Third Task");

const { readFile } = require("fs");

console.log("first Task");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log("First Task Completed");
});

console.log("next task Start");

let i = 0;
const t = setInterval(() => {
  console.time();
  console.log("Hello" + " " + i++ + " " + "Times");
  console.timeEnd();
  if (i == 10) {
    clearInterval(t);
  }
}, 2000);

console.log("Next Task");
