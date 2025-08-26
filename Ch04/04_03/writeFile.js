const fs = require("fs");

let md = `
# This is a new file

ES6 template strings are cool. They honor whitespace.

* Template strings
* Node file system
* Readline CLIs
`;

fs.writeFile("./javascript.md", md.trim(), function(err) {
    if (err) throw err;

    fs.appendFileSync("./javascript.md", "\n\n## Node.js, everyone\n");
    console.log("Markdown file created.");
});
