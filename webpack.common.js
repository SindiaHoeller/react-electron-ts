const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const imageInlineSizeLimit = parseInt(
    process.env.IMAGE_INLINE_SIZE_LIMIT || '10000'
);
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    devtool: 'source-map',
    // The mode is getting overwritten for dev with the webpack.dev.js
    mode: 'production',
    // Defining the output folder and the name of the bundled js
    // The assetModuleFilename is needed for the fonts, because I did not want to have them in the root of build folder
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.bundle.js',
        assetModuleFilename: 'styles/[name][ext]' ,
    },
    devServer: {
        port: 3000,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            // this rules are converting the tsx and ts files and bundling it to one js file
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.tsx?$/,
                exclude: '/node_modules/',
                use: 'ts-loader',
            },
            // this rule converts sass and scss files into a bundled css, while keeping their sourcemap
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // This is needed, because the css is not directly in the built folder but in built/styles
                            // as defined in the initialization of the plugin
                            publicPath: '../',
                        }
                    },
                    {
                        loader: "css-loader",
                        options: { sourceMap: true}
                    },{
                        loader: "sass-loader",
                        options: { sourceMap: true }
                    }
                ]
            },
            // Needed for images with this endings
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: imageInlineSizeLimit,
                    },
                },
            },
            // Needed for svg files
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: imageInlineSizeLimit,
                        },
                    },
                ],
            },
            // Needed to define our fonts as assets, so that they get loaded into the styles folder (assetModuleFilename)
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        // Generates an `index.html` file with the <script> and <style> injected.
        new HtmlWebpackPlugin(
            Object.assign(
                {},
                {
                    template: resolveApp('public/index.html'),
                    minify: {
                        removeComments: true,
                        collapseWhitespace: true,
                        removeRedundantAttributes: true,
                        useShortDoctype: true,
                        removeEmptyAttributes: true,
                        removeStyleLinkTypeAttributes: true,
                        keepClosingSlash: true,
                        minifyJS: true,
                        minifyCSS: true,
                        minifyURLs: true,
                    },
                },
            )
        ),
        // This defines, that the css files when built will be in the "styles" folder
        new MiniCssExtractPlugin({
            filename: "styles/[name].css",
            chunkFilename: "[id].css",
        }),
        // This just copies the assets 1:1 into the build/assets folder
        new CopyPlugin({
            patterns: [
                { from: "public/assets", to: "assets" },
            ],
        }),
    ],
};