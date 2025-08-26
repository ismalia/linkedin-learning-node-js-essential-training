const fs = require("fs");

// Synchronous file renaming
fs.renameSync("./lib/config.js", "./lib/project-config.js");
console.log("Config.js file renamed.");

// Asynchronous file moving
fs.rename("./lib/notes.md", "./notes.md", function(err) {
    if (err) throw err;
    console.log("Notes markdown file moved.");
});

// Synchronous file deletion
fs.unlinkSync("./lib/project-config.js");
console.log("Project-config.js file deleted.");

// Asynchronous file deletion
fs.unlink("./notes.md", function(err) {
    if (err) throw err;
    console.log("Notes are gone.");
});
