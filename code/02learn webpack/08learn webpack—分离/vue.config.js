module.exports = {
    devServer: {
        port: 7777, // 启动端口号
        open: true,  // 启动后是否自动打开网页
        proxy: {
            // '/api': {
            //     target: 'http://serverresource.oss-cn-hangzhou.aliyuncs.com/', //目标路径
            //     changeOrigin: true,//允许跨域
            //     pathRewrite: {
            //         "^/api": "",
            //     },
            // },
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                secure: false,//默认情况下，将不接受在 HTTPS 上运行且证书无效的后端服务器
                pathRewrite: {
                    "^/api": "",
                },
            }
        }
    }
}
