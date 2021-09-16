import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4a7e616b = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _43a9172e = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _3c00fd9f = () => interopDefault(import('..\\pages\\articles\\index.vue' /* webpackChunkName: "pages_articles_index" */))
const _5b4af18e = () => interopDefault(import('..\\pages\\demo\\index.vue' /* webpackChunkName: "pages_demo_index" */))
const _b059d100 = () => interopDefault(import('..\\pages\\admin\\login.vue' /* webpackChunkName: "pages_admin_login" */))
const _559fe9d6 = () => interopDefault(import('..\\pages\\admin\\article\\compose.vue' /* webpackChunkName: "pages_admin_article_compose" */))
const _634bec32 = () => interopDefault(import('..\\pages\\admin\\article\\manage.vue' /* webpackChunkName: "pages_admin_article_manage" */))
const _01cdc2fb = () => interopDefault(import('..\\pages\\admin\\can\\compose.vue' /* webpackChunkName: "pages_admin_can_compose" */))
const _4fd25dc4 = () => interopDefault(import('..\\pages\\articles\\_type\\_id.vue' /* webpackChunkName: "pages_articles__type__id" */))
const _41fedc08 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/blog2.0/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4a7e616b,
    name: "about"
  }, {
    path: "/admin",
    component: _43a9172e,
    name: "admin"
  }, {
    path: "/articles",
    component: _3c00fd9f,
    name: "articles"
  }, {
    path: "/demo",
    component: _5b4af18e,
    name: "demo"
  }, {
    path: "/admin/login",
    component: _b059d100,
    name: "admin-login"
  }, {
    path: "/admin/article/compose",
    component: _559fe9d6,
    name: "admin-article-compose"
  }, {
    path: "/admin/article/manage",
    component: _634bec32,
    name: "admin-article-manage"
  }, {
    path: "/admin/can/compose",
    component: _01cdc2fb,
    name: "admin-can-compose"
  }, {
    path: "/articles/:type/:id?",
    component: _4fd25dc4,
    name: "articles-type-id"
  }, {
    path: "/",
    component: _41fedc08,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
