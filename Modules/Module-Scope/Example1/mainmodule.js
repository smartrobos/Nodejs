var something = require('./submodule.js')
module.exports = console.log('is this main module', __filename, require.main === module);
