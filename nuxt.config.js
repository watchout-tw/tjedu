const INFO = require('./data/info')

export default {
  mode: 'universal',
  head: {
    title: INFO.SITE_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: INFO.SITE_DESCRIPTION }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/logo-2-small.png' }
    ]
  },
  loading: {
    color: '#333',
    height: '4px'
  },
  css: [],
  plugins: [],
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  // Axios module configuration
  axios: {},
  // Build configuration
  build: {
    transpile: [
      'watchout-common-assets'
    ],
    // Extend webpack config here
    extend(config, ctx) {
      // Run ESLint on save
      if(ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    dir: 'docs'
  }
}
