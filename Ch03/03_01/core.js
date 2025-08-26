const path = require("path");
const util = require("util");
const v8 = require("v8");

console.log(`${path.basename(__filename)}\n`);

const dirUploads = path.join(__dirname, "www", "files", "uploads");

// (node:91343) [DEP0059] DeprecationWarning: The `util.log API is deprecated. Please use console.log() with a custom formatter or a third-party logger instead.
util.log(dirUploads);
util.log(path.basename(__filename));
util.log(v8.getHeapStatistics());
