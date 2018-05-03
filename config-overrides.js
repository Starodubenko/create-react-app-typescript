const path = require('path');

module.exports = function override(config, env) {
    config.resolve.modules.push(path.resolve(__dirname, 'src/modules'));
    return config;
};