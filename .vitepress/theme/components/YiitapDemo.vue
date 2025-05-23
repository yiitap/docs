<template>
  <article class="layout">
    <header class="layout-toolbar">
      <o-main-menu
          :editor="yiiEditor?.editor"
          :menu="options.mainMenu"
          :data-theme="isDark ? 'dark' : ''"
      >
        <template #left>
          <o-divider vertical />
          <o-popover
              ref="popover"
              tippy-class="o-ai-settings-popover"
              class="o-simple-command-btn"
              placement="bottom"
              trigger="click"
              arrow
          >
            <template #trigger>
              <o-command-btn
                  icon="settings"
                  tooltip="Settings"
              >
              </o-command-btn>
            </template>

            <div>
              <o-btn-group>
                <div data-tippy-role="tooltip">
                  <o-btn label="OpenAI"
                         :class="{ 'active': aiOption.provider === 'openai' }"
                         @click="aiOption.provider = 'openai'" />
                </div>
                <div data-tippy-role="tooltip">
                  <o-btn label="DeepSeek"
                         :class="{ 'active': aiOption.provider === 'deepseek' }"
                         @click="aiOption.provider = 'deepseek'" />
                </div>
              </o-btn-group>
            </div>

            <div>
              <o-input ref="input"
                       v-model="aiOption.apiKey"
                       type="text"
                       placeholder="API Key"
                       autofocus clearable>
                <template #prefix>
                  <o-icon name="search" class="o-tips" />
                </template>
              </o-input>
            </div>
          </o-popover>
        </template>
      </o-main-menu>
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
import { computed, ref, provide, watch, onMounted, onUnmounted } from 'vue';
import { useData } from 'vitepress';
import {
  YiiEditor,
  ODocToc,
  OMainMenu,
  OCommandBtn,
  ODivider,
  OIcon,
  OInput,
  OBtn,
  OBtnGroup,
  OPopover
} from '@yiitap/vue';
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
const aiOption = ref<AiOption>({
  provider: 'deepseek',
})
provide('locale', localeAlt)

const options = computed(() => {
  return {
    aiOption: aiOption.value,
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
      'aiBlock',
    ],
    extensions: [
      'OAiBlock',
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

const aiOptions = computed(() => {
  return [
    { label: 'OpenAI', value: 'openai' },
    { label: 'DeepSeek', value: 'deepseek' },
  ]
})

function init() {
  localeAlt.value = props.locale
  try {
    const aiOptionString = localStorage.getItem('yiitap.ai.option')
    if (aiOptionString) {
      aiOption.value = JSON.parse(aiOptionString)
    }
  } catch (e) {
    // ignore
  }
}

const onScroll = (event: Event) => {
  tocRef.value?.onScroll(event);
}

watch(
    aiOption,
    (newValue) => {
      localStorage.setItem('yiitap.ai.option', JSON.stringify(aiOption.value))
    },
    { deep: true }
)

onMounted(() => {
  init()
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
  top: 120px ;
  right: 10px;
  z-index: 101;
}

.o-input {
  width: 400px;
}

.o-btn-group {
  margin-bottom: 10px;

  .o-btn.active {
    color: white;
    background: var(--vp-button-brand-bg);

    &:hover {
      background: var(--vp-button-brand-hover-bg)!important;
    }
  }
}
</style>