<template>
  <article class="layout">
    <header class="layout-toolbar">
      <o-main-menu
          :editor="yiiEditor?.editor"
          :menu="options.mainMenu"
          :data-theme="isDark ? 'dark' : ''"
      />
    </header>

    <section class="layout-content">
      <YiiEditor ref="yiiEditor" v-bind="options" />
    </section>

    <aside class="layout-toc">
      <o-doc-toc
          ref="tocRef"
          :editor="yiiEditor?.editor"
          :max-level="3"
      />
    </aside>
  </article>
</template>

<script setup lang="ts">
import { computed, ref, provide, onMounted, onUnmounted } from 'vue';
import { useData } from 'vitepress';
import { YiiEditor, ODocToc, OMainMenu } from '@yiitap/vue';
import '@yiitap/vue/dist/vue.css';
import { BasicFeaturesArticle, BasicFeaturesArticleZh } from '../../data/demo/article';

const props = defineProps({
  locale: {
    type: String,
    default: 'en'
  }
})

const { isDark } = useData();

const localeAlt = ref('en')
const yiiEditor = ref<InstanceType<typeof YiiEditor>>()
const tocRef = ref<InstanceType<typeof ODocToc>>()
provide('locale', localeAlt)

const options = computed(() => {
  return {
    // locale: locale.value,
    darkMode: isDark.value,
    // editable: editable.value,
    content: props.locale === 'zh' ? BasicFeaturesArticleZh : BasicFeaturesArticle,
    showMainMenu: false,
    showBubbleMenu: true,
    showFloatingMenu: true,
    showSideMenu: true,
    // showSideNode: true,
    pageView: 'page',
    mainMenu: [
      'bold',
      'italic',
      'text-format-dropdown',
      'separator',
      'heading',
      'font-family',
      'text-color-dropdown',
      'fore-color',
      'back-color',
      'clearFormat',
      'separator',
      'align-dropdown',
      'separator',
      'horizontalRule',
      'blockquote',
      'list-dropdown',
      'codeBlock',
      'link',
      'image',
      'video',
      'table',
      'callout',
      'emoji',
    ],
    extensions: [
      'OBlockquote',
      'OCallout',
      'OCodeBlock',
      'OColon',
      'OColorHighlighter',
      'OHeading',
      'OImage',
      'OParagraph',
      'OSlash',
      'OSlashZh',
      'OLink',
      'OTrailingNode',
      'OVideo',
    ],
  }
})

const onScroll = (event: Event) => {
  tocRef.value?.onScroll(event);
};

onMounted(() => {
  localeAlt.value = props.locale
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style scoped>
.layout {
  padding-top: 40px;
}

.layout-toolbar {
  position: fixed;
  left: 0;
  right: 0;
  top: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--vp-c-bg);
  z-index: 10;
}

.layout-toc {
  position: fixed;
  top: 64px ;
  right: 10px;
  z-index: 101;
}
</style>