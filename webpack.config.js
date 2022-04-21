const path = require("path")

module.exports = {
    entry: {
        index: "./src/index.js",
        subpage: "./src/subpage.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "build")
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, "build")
        },
        port: 3002
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|webp|gif)$/,
                type: "asset/resource"
            },
            {
                test: /\.js$/i,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}