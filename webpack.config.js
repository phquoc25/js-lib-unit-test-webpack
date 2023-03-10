// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: './src/index.js',
    output: {
        filename: 'price-cal.js', 
        path: path.resolve(__dirname, 'dist'),
        globalObject: 'this',
        library: {
            name: 'PriceCal',
            type: 'umd'
        },
        clean: true
    },
    devtool: 'inline-source-map'
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
