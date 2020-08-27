const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                '@': resolve('src'),
            }
        },
        devServer: {
            proxy: {
                '/proxy': {
                    target: 'http://175.24.113.119:8080',
                    changeOrigin: true, //改变源
                    ws: true, //跨域
                    pathRewrite: {
                        '^/proxy': ''
                    }
                }
            }
        }

    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: []
        }
    },
    publicPath: './',


}