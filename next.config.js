const { default: loadConfig } = require("next/dist/next-server/server/config")
const path = require('path');

module.exports = {
    webpack: (config) => {
         config.resolve.alias['@'] = path.resolve(__dirname);
         return config;
    }
}