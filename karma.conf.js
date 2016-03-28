var path = require('path');
var webpack = require('webpack');

module.exports = function (config) {
  'use strict';
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [
      './karma.entry.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      './karma.entry.js': ['webpack', 'sourcemap']
    },

    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.js$/,
            loaders: [
              'babel?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=rewire,plugins[]=transform-runtime'
            ],
            exclude: path.resolve(__dirname, 'node_modules'),
          },
          {
            test: /\.json$/,
            loader: 'json',
          }
        ]
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'text-encoding': 'window'
      }
    },


    webpackMiddleware: {
      noInfo: true
    },

    babelPreprocessor: {
      options: {
        presets: ['airbnb']
      }
    },

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-coverage',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader',
      'karma-sinon',
      'karma-chai-plugins',
      'karma-mocha-reporter'
    ],

    reporters: ['spec'],

    port: 9877,
    colors: true,
    autoWatch: true,
    singleRun: false,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS']

  });
};
