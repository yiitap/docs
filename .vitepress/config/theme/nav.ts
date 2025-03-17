import { tr } from '../../i18n'
import { preview } from '../../meta'
import { DefaultTheme } from "vitepress";

export function nav(locale :string) {
  const t = (key :string) => {
    return tr(locale, `nav.${key}`)
  }
  const base = (locale === 'en') ? '' : `/${locale}`;
  return [
    { text: t('guide'), link: base + '/guide/getting-started' },
    { text: 'API', link: base + '/api/component/overview' },
    { text: t('demo'), link: base + '/demo/vue' },
    // {
    //   text: 'Demos',
    //   items: [
    //     { text: 'Vue', link: base + '/demo/vue' },
    //     { text: 'React', link: base + '/demo/react' },
    //   ]
    // },
    { text: t('preview'), link: preview },
  ] as DefaultTheme.NavItem[];
}