const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common,{
    // In electron, if you want to use the node core modules like 'fs' or 'path', you need to define the target
    target: "electron-main",
})