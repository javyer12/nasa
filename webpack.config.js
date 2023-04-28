const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.jsx' ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images', // Directorio de salida
                    name: '[name].[ext]', // Nombre de archivo generado
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images', // Directorio de salida
                    name: '[name].[ext]', // Nombre de archivo generado
                },
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        historyApiFallback: true,
        port: 5000,
        compress: true,
        open: true,
    },
};
