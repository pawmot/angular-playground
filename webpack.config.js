'use strict';
var webpack = require('webpack');
var path = require('path');

var APP = path.join(__dirname, 'app');
var BUILD = path.join(__dirname, 'build');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: APP,
    entry: {
        app: ['webpack/hot/dev-server', './core/bootstrap.js']
    },
    output: {
        path: BUILD,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.js$/,
            loader: 'ng-annotate!babel?presets[]=es2015!jshint',
            exclude: /node_modules|bower_components/
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
            loader: 'file-loader?name=res/[name].[ext]?[hash]'
        }, {
            test: /\.json$/,
            loader: 'json'
        }]
    },
    resolve: {
        root: APP
    },
    plugins: [
        new webpack.DefinePlugin({
            MODE: {
                production: process.env.NODE_ENV === 'prod',
                development: process.env.NODE_ENV === 'dev'
            }
        }),
        new HtmlWebpackPlugin({
            title: 'AngularJS Playground',
            template: path.join(APP, 'index.ejs')
        })
    ]
};