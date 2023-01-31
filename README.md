# Init yarn project
`yarn init`
# Adding karma for runing UT
https://karma-runner.github.io/6.4/intro/installation.html
```
yarn add -D karma
yarn add -D karma-jasmine karma-chrome-launcher jasmine-core
npm install -g karma-cli
karmar init
```

# Using webpack to bundle the source codes
https://webpack.js.org/guides/author-libraries/

`webpack.conf.js`
```js
const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        filename: 'price-calculator.js', 
        path: path.resolve(__dirname, 'dist'),
        globalObject: 'this',
        library: {
            name: 'priceCalculator',
            type: 'umd'
        },
        clean: true
    },
};
```
# Using karma-webpack for unit testing
https://github.com/ryanclark/karma-webpack
```
yarn add -D karma-webpack karma-sourcemap-loader 
```
`karma.config.js`
```js
config.set({
    ...
    ...
    frameworks: ['jasmine', 'webpack'],
    plugins: [
      require('karma-jasmine'),
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
      ...
    ],
    files: [
      { pattern: 'src/test-index.js', watched: false }
    ],
    preprocessors: {
      // add webpack as preprocessor
      'src/test-index.js': [ 'webpack', 'sourcemap'],
    },
    webpack: {
        // must have even if it's empty
    }
    ...
})
```
# Code coverage report
https://www.npmjs.com/package/karma-coverage

```
yarn add -D karma-coverage  
```
`karma.config.js`
```js
config.set({
    ...
    frameworks: ['jasmine', 'webpack'],
    plugins: [
        ...
        require('karma-coverage'),
    ],
    ...
    reporters: ['progress', 'coverage'],

    // optionally, configure the reporter
    coverageReporter: {
      dir : 'coverage/',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'text-summary'},
      ]
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
            exclude: [
              /\.(spec|test)\.js$/,
              /node_modules/,
              /test-index.js/
            ],
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
})
```

# Troubleshooting
## Issue 1
You need to include some adapter that implements __karma__.start method!
## Solution
In the karma.conf.js 
```json
files: [
    'src/**/*.js'
],
```
make sure the files contains only the developping js files

## Issue 2
the library code cannot be used in the script tag

By default, webpack consider the project is an application. That's why there is no function, class that are published outside the js bundle
## Solution
use output.library property in the webpack.conf.js 

## Issue 3
karma coverage cannot report the source code

## Solution
https://github.com/istanbuljs/babel-plugin-istanbul

use the babel-plugin-istanbul to add instrumenting code to JavaScript source code

`yarn add -D babel-plugin-istanbul`

`karma.config.js`
```js
config.set({
    ...
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
            exclude: [
              /\.(spec|test)\.js$/,
              /node_modules/,
              /test-index.js/
            ],
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
})
```
