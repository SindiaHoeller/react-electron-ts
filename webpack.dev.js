const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common,{
    // For development, those settings are for better troubleshooting
    mode: 'development',
    optimization: {
        minimize: false,
    },
    devtool: 'inline-source-map',
})