const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './build'),
  publ: path.join(__dirname, './public'),
};

const configuration = {
  mode: 'development',
  entry: {
    main: `${PATHS.src}/index.tsx`,
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'js/[name].js',
  },
  resolve: {
    alias: {
      $redux: path.resolve(__dirname, './src/redux/'),
      '~': path.resolve(__dirname, './src/'),
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['*', '.js', '.ts', '.tsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env'],
        },
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]__[hash:base64:5]',
              url: false,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              modules: true,
              sourceMap: true,
              plugins: [
                autoprefixer(),
                cssnano({
                  preset: [
                    'default', {
                      discardConmments: {
                        removeAll: true,
                      },
                    },
                  ],
                }),
              ],
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'sass-resources-loader',
            options: {
              resources: ['src/styles/variables.scss'],
            },
          },
        ],
      }, {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
            },
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {
                  removeTitle: true,
                },
                {
                  convertColors: {
                    shorthex: false,
                  },
                },
                {
                  convertPathData: false,
                },
              ],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: PATHS.dist,
    port: 8081,
    compress: true,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${PATHS.publ}/index.html`,
      inject: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      noSources: false,
    }),
    new CopyWebpackPlugin([
      {
        from: `${PATHS.publ}/favicon.ico`,
        to: 'static',
      },
    ]),
  ],
};

module.exports = configuration;
