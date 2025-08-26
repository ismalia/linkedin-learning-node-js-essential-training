const fs = require("fs");

// Synchronous directory moving
fs.renameSync("./assets/logs", "./accounts/logs");
console.log("Logs folder moved.");

// Asynchronous directory deletion
fs.rmdir("./assets", function(err) {
    if (err) console.log(err);
    else console.log("Assets directory removed.");
});

// To remove a directory, we have to get rid of everything that's inside of it
fs.readdirSync("./accounts").forEach((file) => {
    fs.renameSync(`./accounts/${file}`, `./library/${file}`);
});
console.log("Files removed.");

fs.rmdirSync("./accounts");
console.log("Folder removed.");
