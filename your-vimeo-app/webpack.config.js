const webpack = require('webpack');
const path = require('path');

const DIR_SRC = path.join(__dirname, 'src');
const DIR_DIST = path.join(__dirname, 'dist');

const webpackConfig = {
    entry: path.join(DIR_SRC, 'index.js'),
    output: {
        path: DIR_DIST,
        filename: 'bundle.js'
    },
    module: {
        rules: []
    },
    devServer: {
        contentBase: DIR_DIST
    }
}

// setup babel-loader
const babelConfig = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader']
}
webpackConfig.module.rules.push(babelConfig);

// CSS setup
const cssConfig = {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader']
}
webpackConfig.module.rules.push(cssConfig);

// SCSS setup
// const sassConfig = {
//     test: /\.scss$/,
//     exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/],
//     include: DIR_DIST,
//     loaders: [
//         require.resolve('style-loader'),
//         require.resolve('css-loader'),
//         require.resolve('sass-loader')
//     ]
// }
// webpackConfig.module.rules.push(sassConfig);

module.exports = webpackConfig;