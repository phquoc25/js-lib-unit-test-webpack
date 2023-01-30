// load all specs in ./src
const context = require.context("./", true, /\.spec\.js$/);
context.keys().map(context);