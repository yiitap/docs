import { defineConfig } from 'vitepress'
import { nav } from './theme/nav'
import { sidebarGuide, sidebarApi } from './theme/sidebar'
import { labels } from './theme/labels'
import { name, description, docsRepo } from '../meta'

const locale = 'en';

export default defineConfig({
  title: name,
  description: description,
  themeConfig: {
    ...labels(locale),
    nav: nav(locale),
    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide(locale) },
      '/api/': { base: '/api/', items: sidebarApi(locale) },
    },
    editLink: {
      pattern: `${docsRepo}/edit/main/src/:path`,
      text: "Edit this page",
    },
  },
  head: [
  ],
})