const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {DefinePlugin} = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    // 设置模式
    // development 开发阶段, 会设置development
    // production 准备打包上线的时候, 设置production
    mode: "development",
    // 设置source-map, 建立js映射文件, 方便调试代码和错误
    devtool: 'source-map',
    entry: './src/main.js',
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, 'dist'),
        //assetModuleFilename: "img/[name]_[hash:6][ext]"
    },
    module: {
        rules: [
            {
                //对resource（资源）进行匹配的，通常会设置成正则表达式
                test: /\.css$/,//匹配以css结尾文件 \转义.
                use: [
                    'style-loader', 'css-loader', 'postcss-loader'
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
                test: /\.less$/,//匹配以less结尾文件 \转义.
                use: [
                    'style-loader', 'css-loader', 'less-loader'
                ],
            },
            ////file-loader打包
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/,//匹配图片.
            //     use: {
            //         loader: 'file-loader',
            //         options: {
            //             //设置图片输出文件夹 也可以直接在name中设置文件夹
            //             // outputPath: 'img',
            //             //取hash值前十位，避免使用name导致重名，并显示原来的后缀名
            //             name: 'img/[name]-[hash:6].[ext]',
            //             // url-loader默认使用es6模块解析 html-loader使用common.js
            //             // 如遇无法显示问题可关闭url-loader的es6模块化 使用common.js解析
            //             // esModule:false
            //         }
            //     },
            // },

            //// url-loader打包
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/,//匹配图片.
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             //设置图片输出文件夹 也可以直接在name中设置文件夹
            //             // outputPath: 'img',
            //             //图片小于30kb,就会使用base64格式处理 不会显示在build文件夹中
            //             //减少请求数量所以减轻了服务器压力，但limit过大
            //             //大的图片也进行转换，bundle.js为文件过大,反而会影响页面的请求速度
            //             limit: 300 * 1024,
            //             //避免小于limit的大小的图片名字变为hash值后文件名过长，下面进行重命名
            //             //取hash值前十位，避免使用name导致重名，并显示原来的后缀名
            //             name: 'img/[name]-[hash:6].[ext]',
            //             // url-loader默认使用es6模块解析 html-loader使用common.js
            //             // 如遇无法显示问题可关闭url-loader的es6模块化 使用common.js解析
            //             esModule:false
            //         }
            //     },
            // },

            // 资源模块类型(asset module type)
            {
                test: /\.(jpe?g|png|svg|gif)$/,
                type: "asset",
                generator: {
                    filename: 'img/[name]_[hash:6][ext]',//此处的扩展名ext包含了.
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 300 * 1024,//超过该值则不打包为datauri
                    }
                }
            },
            // //打包字体文件 file-loader无法实现
            // {
            //     test: /\.(eot|ttf|woff2?)$/,
            //     use:{
            //         loader: "file-loader",
            //         // options: {
            //         //     name:'font/[name]_[hash:6].[ext]',
            //         // }
            //     }
            // },
            {
                test: /\.(eot|ttf|woff2?)$/,
                type: "asset/resource",
                generator: {
                    filename: 'font/[name]_[hash:6][ext]',
                }
            }
        ]
    },
    plugins: [
        //1:打包之前删除原来打包好的文件夹
        new CleanWebpackPlugin(),
        //2:打包HTML
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title: "冰冰"
        }),
        //3:在编译时创建配置的全局常量
        new DefinePlugin({
            BASE_URL: "'./'"
        }),
        //4:复制文件夹到dist中
        new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'public',
                        to: './',//默认就是打包结果文件夹
                        globOptions: {
                            ignore: ['**/index.html'],//忽略public文件夹下的所有index.html文件
                        }
                    }
                ]
            }
        )
    ]
}
