const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'main.bundle.js'
    },
    mode: process.env.NODE_ENV || 'development',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {importLoaders: 1}
                    },
                    "postcss-loader",
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],

        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ],
        fallback: {"path": require.resolve("path-browserify")}

    },

    devServer: {
        static: path.join(__dirname, 'src'),
        port: 3000
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'React App',
        // Inserta los assets en el documento HTML
        inject: true,
        // Ubicación de tu HTML en el proyecto
        template: "./src/index.html",
        // Nombre y dirección del HTML que se creara al momento de ejecutar webpack
        filename: "./index.html"
    })],
};