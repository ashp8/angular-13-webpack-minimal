const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const {AngularWebpackPlugin} = require('@ngtools/webpack');
const path = require('path');

module.exports = {
    entry: './src/main.ts',
    mode: "development",
    devServer: {
        static: {
           directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 4200,
    }
    ,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
           {
               test: /\.ts$/,
               loader: '@ngtools/webpack'
           } 
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {from: 'src/assets', to: 'assets'}
            ]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            output: path.resolve(__dirname, 'dist'),
            inject: 'head'
        }),
        new ScriptExtPlugin({
            defaultAttribute: 'defer'
        }),
        new AngularWebpackPlugin({
            tsconfig: './tsconfig.json',
            entryModule: './src/app/app.module#AppModule',
            sourceMap: false,
            strictInjectionParameters: true
        })
    ]
};
