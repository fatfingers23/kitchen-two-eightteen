export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kitchen-two-eightteen',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        type: 'module',
        src: '/assets/js/jquery.min.js'
      },
      {
        type: 'module',
        src: '@/assets/js/jquery.easing.1.3.js'
      },
      {
        type: 'module',
        src: '@/assets/js/bootstrap.min.js'
      },
      {
        type: 'module',
        src: '@/assets/js/jquery.waypoints.min.js'
      },
      {
        type: 'module',
        src: '@/assets/js/jquery.stellar.min.js'
      },
      {
        type: 'module',
        src: '@/assets/js/jquery.flexslider-min.js'
      },
      {
        type: 'module',
        src: '@/assets/js/main.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css',
    '@/assets/css/bootstrap.css',
    '@/assets/css/bootstrap-datetimepicker.min.css',
    '@/assets/css/flexslider.css',
    '@/assets/css/icomoon.css'
    // '@/assets/css/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
