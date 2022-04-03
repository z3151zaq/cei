const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                //指定 路径 要 跨域请求地址
                // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                // 将/api开头的url转发到target上。
                target: 'https://www.cei.net.cn/cei/front', //跨域请求地址
                changeOrigin: true, //虚拟的站点需要更管origin
                ws: true, // 代理websockets
                secure: true, // 如果是https接口，需要配置这个参数
                pathRewrite: {
                    // 顾名思义，将/api重写为 / 此时url变为 http://192.168.101.110:8888/ 而不是 http://192.168.101.110:8888/api
                    '^/api': '',
                },
            },
        },
    },
});
