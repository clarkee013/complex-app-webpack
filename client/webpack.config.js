var path = require("path");

var config = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    }
}

module.exports = config;