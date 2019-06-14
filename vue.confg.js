process.env.VUE_APP_TARGET = 'http://photobb.dev.webant.ru'
process.env.VUE_APP_API_PATH = '/api/v1'
process.env.VUE_APP_UPLOADS_PATH = '/uploads'
process.env.VUE_APP_TOKEN_PATH = '/oauth/v2/token'
process.env.VUE_APP_HOST = 'localhost'
process.env.VUE_APP_PORT = 3000

const E = process.env

module.exports = {
    devServer: {
        port: E.VUE_APP_PORT,
        host: E.VUE_APP_HOST,
        proxy: {
            [E.VUE_APP_API_PATH]: {
                target: E.VUE_APP_TARGET,
                ws: true,
                changeOrigin: true
            },
            [E.VUE_APP_UPLOADS_PATH]: {
                target: E.VUE_APP_TARGET,
                ws: true,
                changeOrigin: true
            },
            [E.VUE_APP_TOKEN_PATH]: {
                target: 'http://photobb.dev.webant.ru',
                changeOrigin: true
            },
        }
    }
}