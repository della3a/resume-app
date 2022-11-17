// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: 'Resume App',
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '../static/logo.png' }
        ]
      },
      build: {
        postcss: {
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {}
            }
          }
        }
      },
      css: [
        '~/assets/css/tailwind.css'
      ],
      buildModules: [
        '@nuxt-hero-icons/outline/nuxt'
      ],
})
