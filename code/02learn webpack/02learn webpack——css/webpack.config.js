const path = require('path')
module.exports = {
    entry: './src/main.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                //对resource（资源）进行匹配的，通常会设置成正则表达式
                test: /\.css$/,//匹配以css结尾文件 \转义.
                use: [
                    'style-loader', 'css-loader','postcss-loader'
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [
                    //                 require('autoprefixer')
                    //             ]
                    //         }
                    //     }
                    // }
                ],
            },
            {
                //对resource（资源）进行匹配的，通常会设置成正则表达式
                test: /\.(less|css)$/,//匹配以less结尾文件 \转义.
                use: [
                    'style-loader', 'css-loader', 'less-loader'
                ],
            }
        ]
    }
}
