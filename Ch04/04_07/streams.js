const fs = require("fs");

let stream = fs.createReadStream("./chat-logs/george-ben-chat.log", "UTF-8");

let data = "";

stream.once("data", (chunk) => {
    console.log("Read stream started");
    console.log("===================");
    console.log(chunk);
});

stream.on("data", (chunk) => {
    console.log(`\nChunk: ${chunk.length} characters.`);
    data += chunk;
});

stream.on("end", () => {
    console.log(`\nFinished: ${data.length} characters.`);
});

console.log("Reading the file...\n");
