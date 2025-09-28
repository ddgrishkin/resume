const path = require('path');
const paths = require('../paths');

module.exports = {
    mode: process.env.NODE_ENV,
    context: paths.root,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                },
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jss', '.css'],
        modules: ['node_modules', paths.client],
        alias: {
            '@/*': path.resolve(paths.client, '*'),
        },
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                react: {
                    reuseExistingChunk: true,
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: '../vendors/react-vendor',
                    chunks: 'all',
                },
            },
        },
    },
}
