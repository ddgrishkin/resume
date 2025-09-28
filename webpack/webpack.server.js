const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const path = require('path');
const paths = require('../paths');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
    target: 'node',

    entry: './src/server/index.tsx',
    output: {
        filename: 'index.js',
        path: path.resolve(paths.root, 'dist/server'),
    },

    module: {
        rules: [
            {
                test: /.\module\.css$/i,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                namedExport: false,
                                exportOnlyLocals: true,
                                exportLocalsConvention: 'camel-case'
                            },
                        }
                    }
                ],
            },
        ],
    },

    externals: [nodeExternals()],
});
