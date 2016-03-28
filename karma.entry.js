// Require all ".spec.js" files in ~/src.
const context = require.context('./src', true, /.+\.spec\.js$/);
context.keys().forEach(context);
module.exports = context;
