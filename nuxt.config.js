const StyleLintPlugin = require('stylelint-webpack-plugin')
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css',
    '@/assets/css/ui/index.scss',
    '@/assets/css/global.scss'
    // 'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '@/assets/css/ui/mixins/_mixins.scss',
      '@/assets/css/ui/common/_var.scss',
      '@/assets/css/_variables.scss'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    postcss: {
      plugins: {
        autoprefixer: {
          overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
        }
      },
      preset: {
        grid: true,
        overrideBrowserslist: [
          'Android 4.1',
          'iOS 7.1',
          'Chrome > 31',
          'ff > 31',
          'ie >= 8'
        ]
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.plugins.push(
        new StyleLintPlugin({
          files: ['/**/*.{vue,html,css,scss,sass,less}'],
          cache: true,
          fix: true
        })
      )
    }
  }
}
