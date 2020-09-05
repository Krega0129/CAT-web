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
        }
    },
    /* chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // 要公用的scss的路径
                    resources: './src/assets/all.css/*.scss'
                })
                .end()
        })
    }, */
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                //加上自己的文件路径，不能使用别名
                path.resolve(__dirname, 'src/styles/_variables.scss'),
            ]
        }
    },
    publicPath: './'
}