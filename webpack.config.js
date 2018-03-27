var path = require('path');

module.exports = {
    entry: path.resolve(__dirname,'components') + '/Table.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders :[
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname,'node_modules'),
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }

}
