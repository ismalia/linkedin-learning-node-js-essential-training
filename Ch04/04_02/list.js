const fs = require("fs");

// let ipsum = fs.readFileSync("./README.md", "UTF-8");
// console.log(ipsum);

fs.readFile("./README.md", "UTF-8", (err, ipsum) => {
    if (err) throw err;
    console.log(ipsum);
});

console.log("Reading the file...\n");
