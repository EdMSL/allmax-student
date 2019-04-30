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
    main: `${PATHS.src}/index.jsx`,
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'js/[name].js',
  },
  resolve: {
    alias: {
      $redux: path.resolve(__dirname, './src/redux/'),
      $components: path.resolve(__dirname, './src/components/'),
      $containers: path.resolve(__dirname, './src/containers/'),
      $images: path.resolve(__dirname, './src/images/'),
      $dist: path.resolve(__dirname, './build'),
      $publ: path.resolve(__dirname, './public'),
    },
    extensions: ['*', '.js', '.jsx'],
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
        test: /\.(sa|sc|c)ss$/,
        use: [
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          }, {
            loader: 'postcss-loader',
            options: {
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
