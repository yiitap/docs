# ODocToc

## API
<component-doc path="vue/components/common/ODocToc" locale="zh" />

## 使用
```vue
<template>
  <YiiEditor ref="yiiEditor" v-bind="options" />
  <o-doc-toc
      ref="tocRef"
      :editor="yiiEditor?.editor"
      :max-level="3"
      @doc-scroll="onDocScroll"
  />
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue'
import { YiiEditor, ODocToc } from '@yiitap/vue';

const yiiEditor = ref<InstanceType<typeof YiiEditor>>()
const tocRef = ref<InstanceType<typeof ODocToc>>()

function onDocScroll(event: Event) {
  // If docScroll event not emitted, 
  // use tocRef.value?.onScroll(event) to update toc progress when scrolling.
  // console.debug('docScroll', event)
}
</script>
```

::: tip
OTocDoc 默认会监听编辑器容器的滚动事件，并同步更新目录项的进度。

如果在编辑器容器上滚动没有效果，可以直接使用暴露的 onScroll 方法。例如：tocRef.value?.onScroll (event)。
:::