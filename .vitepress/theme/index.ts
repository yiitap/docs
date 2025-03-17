import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import type { EnhanceAppContext, Theme } from 'vitepress'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
// import { VPPluginTabs, VPPluginTab } from 'vitepress-plugin-tabs'
// import "vitepress-plugin-tabs/style.css";
import { watchEffect } from 'vue'
import { ComponentDoc, VersionBadge, YiitapDemo } from './components'
import './style/main.css'
import './style/vars.css'

const theme = {
  extends: DefaultTheme,
  enhanceApp({ app, router }: EnhanceAppContext) {
    // components
    app.component('ComponentDoc', ComponentDoc)
    app.component('VersionBadge', VersionBadge)
    app.component('YiitapDemo', YiitapDemo)
    // app.component('VPPluginTabs', VPPluginTabs)
    // app.component('VPPluginTab', VPPluginTab)

    // plugins
    // app.use(pinia);

    // tabs
    enhanceAppWithTabs(app)
  },
  setup() {
    const { lang } = useData()
    watchEffect(() => {
      if (typeof document !== 'undefined')
        document.cookie = `nf_lang=${lang.value}; expires=Sun, 1 Jan 2024 00:00:00 UTC; path=/`
    })
  },
} satisfies Theme;

export { theme as default };