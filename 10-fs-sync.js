// "fs = fileSystem"
// const fs = require('fs');

const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);

// writeFileSync(directory,"result,"font")
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);
