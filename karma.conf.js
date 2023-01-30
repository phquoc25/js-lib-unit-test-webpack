// Karma configuration
// Generated on Sun Jan 29 2023 16:44:38 GMT+0700 (Indochina Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ['jasmine', 'webpack'],

    plugins: [
      require('karma-jasmine'),
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
      require('karma-chrome-launcher'),
      require('karma-coverage'),
    ],

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'src/test-index.js', watched: false }
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
    preprocessors: {
      // add webpack as preprocessor
      'src/test-index.js': [ 'webpack', 'sourcemap'],
    },

    webpack: {
      // karma watches the test entry points
      // Do NOT specify the entry option
      // webpack watches dependencies

      // webpack configuration
      // Config to see source code in the coverage report
      module: {
        rules: [
          {
            // include code
            test: /\.js$/,
            // exclude tests from coverage report
            exclude: /\.(spec|test)\.js$/,
            use: [
              {
                loader: "babel-loader",
                options: {
                  plugins: ["istanbul"]
                }
              }
            ]
          }
        ]
      },
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
    reporters: ['progress', 'coverage'],

    // optionally, configure the reporter
    coverageReporter: {
      dir : 'coverage/',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'text-summary'},
      ]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
    browsers: ['ChromeHeadless'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity
  })
}
