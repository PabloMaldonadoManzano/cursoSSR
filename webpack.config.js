const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {

    entry: './src/index.js', //archivo de entrada index,js (src)
    output:{
        path: path.resolve(__dirname, 'dist'), //Donde se irán los archivos compilados con webpack
        filename: 'bundle.js' //Nombre del archivo resultante
    },
    resolve:{
        extensions: ['.js', '.jsx'], //Archivos que va a compilar
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/, //Reglas cuales archivos
                exclude: /node_modules/, //Regla cuales archivos va a excluir
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test:/\.(png|gif|jpg|jpeg)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options:{
                            name: 'assets/[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "assets/[name].css"
        })
    ]


}