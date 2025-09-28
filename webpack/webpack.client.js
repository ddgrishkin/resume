const path = require('path');
const paths = require('../paths');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    extends: path.resolve(__dirname, './webpack.base.js'),
    target: 'web',
    entry: {
        resume: './client/pages/resume/index.tsx',
    },

    output: {
        filename: isProduction ? '[name].[contenthash].js' : '[name].js',
        path: path.resolve(paths.root, 'dist/static', 'resume'),
    },

    module: {
        rules: [
            {
                test: /(?<!\.module)\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg)/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[hash][ext][query]'
                },
            },
            {
                test: /.\module\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                namedExport: false,
                                exportLocalsConvention: 'camel-case',
                                localIdentName: isProduction ? '[hash:base64]' : '[path][name]__[local]'
                            },
                        }
                    }
                ],
            },
        ],
    },

    plugins: [
        new WebpackManifestPlugin({ publicPath: './' }),
        new MiniCssExtractPlugin({
            filename: isProduction ? '[name].[contenthash].css' : 'index.css',
        }),
        new HtmlWebpackPlugin({
            title: 'Dump',
            template: './index.html',
            filename: 'index.html',
            publicPath: './',
        }),
    ],
};
