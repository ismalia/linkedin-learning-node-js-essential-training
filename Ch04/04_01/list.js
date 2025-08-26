const fs = require("fs");

// Read the contents of this directory synchronously with a blocking request.
// let files = fs.readdirSync("./");
// console.log(files);

fs.readdir("./", function(err, files) {
    if (err) throw err;
    console.log(files);
});

// The log will appear before the file contents because readdir is asynchronous.
console.log("Reading files...");
