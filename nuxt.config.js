// import colors from 'vuetify/es5/util/colors'

const axios = require('axios')

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  router: {
    base: '/static_blog/'
  },
  head: {
    titleTemplate: '%s - ' + "xiong35's blog",
    title: "home",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'xiong35 的博客里的一些内容' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#fff' },
  loading: '~/components/loading.vue',
  /*
  ** Global CSS
  */
  css: [
    "~/assets/reset.css",
    "~/assets/transition.css"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/vue-mavon-editor', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    progress: true
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    // theme: {
    //   dark: true,
    //   themes: {
    //     dark: {
    //       primary: colors.blue.darken2,
    //       accent: colors.grey.darken3,
    //       secondary: colors.amber.darken3,
    //       info: colors.teal.lighten1,
    //       warning: colors.amber.base,
    //       error: colors.deepOrange.accent4,
    //       success: colors.green.accent3
    //     }
    //   }
    // }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  generate: {
    routes() {
      let list = []
      let blogs = axios.get('http://xiong35.cn/data/artical/blog/')
        .then((res) => {
          return res.data.data.map((it) => {
            return '/articles/blog/' + it.id
          })
        })
      let traps = axios.get('http://xiong35.cn/data/artical/trap/')
        .then((res) => {
          return res.data.data.map((it) => {
            return '/articles/trap/' + it.id
          })
        })
      return list.concat(blogs).concat(traps)
    },
    dir: '/var/www/static_blog'
  }
}
