import { tr } from '../../i18n';

export function sidebarGuide(locale :string) {
  const t = (key :string) => {
    return tr(locale, `sidebar.guide.${key}`);
  }
  return [
    {
      text: t('guide'),
      collapsed: false,
      items: [
        { text: t('introduction'), link: 'introduction' },
        { text: t('gettingStarted'), link: 'getting-started' },
        { text: t('styles'), link: 'styles' },
        { text: t('contributing'), link: 'contributing' },
      ]
    },
    // {
    //   text: t('utilities'),
    //   collapsed: true,
    //   items: [
    //     { text: 'Emoji', link: 'util/emoji' },
    //     { text: t('icon'), link: 'util/icon' },
    //   ]
    // },
  ]
}
export function sidebarApi(locale :string) {
  const t = (key :string) => {
    return tr(locale, `sidebar.api.${key}`);
  }
  const vueComponent = (path :string) => {
    return `component/vue/${path}`;
  }
  const reactComponent = (path :string) => {
    return `component/react/${path}`;
  }
  const extension = (path :string) => {
    return `extension/${path}`;
  }
  return [
    {
      text: t('components'),
      collapsed: false,
      items: [
        { text: t('overview'), link: 'component/overview' },
        {
          text: 'Vue',
          collapsed: false,
          items: [
            { text: 'YiiEditor', link: vueComponent('yii-editor') },
            {
              text: 'Common',
              collapsed: false,
              items: [
                { text: 'Doc TOC', link: vueComponent('common/doc-toc') },
              ]
            },
            {
              text: 'Menus',
              collapsed: false,
              items: [
                { text: 'OMainMenu', link: vueComponent('menus/main-menu') },
              ]
            },
            {
              text: 'UI',
              collapsed: true,
              items: [
                { text: 'OIcon', link: vueComponent('ui/icon') },
              ]
            },
          ]
        },
        {
          text: 'React',
          collapsed: false,
          items: [
            { text: 'YiiEditor', link: reactComponent('yii-editor') },
          ]
        },
      ]
    },
    {
      text: t('extensions'),
      collapsed: false,
      items: [
        { text: t('overview'), link: extension('overview') },
        { text: 'Callout', link: extension('callout') },
        { text: 'Char Command', link: extension('char-command') },
        { text: 'Code Block', link: extension('code-block') },
        { text: 'Color Highlighter', link: extension('color-highlighter') },
        { text: 'Image', link: extension('image') },
        { text: 'Placeholder', link: extension('placeholder') },
        { text: 'Selection Decoration', link: extension('selection-decoration') },
        { text: 'Table', link: extension('table') },
        { text: 'Trailing Node', link: extension('trailing-node') },
        { text: 'Unique ID', link: extension('unique-id') },
        { text: 'Video', link: extension('video') },
      ]
    },
  ]
}