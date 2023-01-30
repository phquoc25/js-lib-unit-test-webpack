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
