<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { tr } from '../../i18n'
import Loading from './Loading.vue'

const props = defineProps({
  path: {
    type: String,
    required: true
  },
  locale: {
    type: String,
    default: 'en',
    validator: (value: string) => ['en', 'zh'].includes(value)
  }
})

const meta = ref<any>(null)
const loading = ref(false)

const t = (key :string) => {
  return tr(props.locale, `api.${key}`)
}

onMounted(async () => {
  const componentDocRoot = props.locale === 'en'
      ? `/data/api`
      : `/data/api/${props.locale}`
  try {
    const jsonPath = `${componentDocRoot}/${props.path}.json?raw`

    loading.value = true;
    const response = await fetch(jsonPath)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    meta.value = await response.json()
    loading.value = false
  } catch (err) {
    loading.value = false
    console.error('Failed to load API data:', err)
  }
})
</script>

<template>
  <section class="component-doc">
    <loading v-if="loading" />
    <template v-else>
      <div class="name">
        {{ meta?.description }}
      </div>
      <PluginTabs>
        <PluginTabsTab :label="t('props')" v-if="meta?.props">
          <div v-for="(item, index) in meta.props" :key="index" class="item">
            <div class="item-main">
              <div>
                <code>{{ item.name }}</code>:
                <span class="text-tips">{{ item.type?.name || '—' }}</span>
              </div>
              <div class="default-value">
                <code>{{ item.defaultValue?.value || '—' }}</code>
              </div>
            </div>
            <div class="description text-tips" v-if="item.description">
              <div class="text-tip">{{ t('description') }}</div>
              <div class="text-info" v-html="item.description" />
            </div>
            <div class="description text-tips" v-if="item.values">
              <div class="text-tip">{{ t('values') }}</div>
              <div class="text-info">
                {{ item.values.join(', ') || '—' }}
              </div>
            </div>
          </div>
        </PluginTabsTab>
        <PluginTabsTab :label="t('events')" v-if="meta?.events">
          <div v-for="(item, index) in meta.events" :key="index" class="item">
            <div class="item-main">
              <div>
                <code>{{ item.name }}</code>:
                <span class="text-tips">({{ item.type?.names.join(',') || '—' }}) => void</span>
              </div>
            </div>
            <div class="description text-tips" v-if="item.description">
              <div class="text-tip">{{ t('description') }}</div>
              <div class="text-info" v-html="item.description" />
            </div>
          </div>
        </PluginTabsTab>
        <PluginTabsTab :label="t('slots')" v-if="meta?.slots">
          <div v-for="(item, index) in meta.slots" :key="index" class="item">
            <div class="item-main">
              <div>
                <code>{{ item.name }}</code>
              </div>
            </div>
            <div class="description text-tips" v-if="item.description">
              <div class="text-tip">{{ t('description') }}</div>
              <div class="text-info" v-html="item.description" />
            </div>
          </div>
        </PluginTabsTab>
        <PluginTabsTab :label="t('expose')" v-if="meta?.expose">
          <div v-for="(item, index) in meta.expose" :key="index" class="item">
            <div class="item-main">
              <div>
                <code>{{ item.name }}</code>
                <template v-if="item.tags?.length">
                  :
                  <span class="text-tips">
                  ({{ item.tags.map((e: any) => e.name).join(',') || '—' }}) => void
                </span>
                </template>
              </div>
            </div>
            <div class="description text-tips" v-if="item.description">
              <div class="text-tip">{{ t('description') }}</div>
              <div class="text-info" v-html="item.description" />
            </div>
          </div>
        </PluginTabsTab>
      </PluginTabs>
      <div class="name">
        <a :href="meta?.sourceFiles[0]" target="_blank">{{ t('viewSource') }}</a>
      </div>
    </template>
  </section>
</template>

<style>
.component-doc {
  .plugin-tabs {
    div[role="tabpanel"] {
      padding: 0;
    }
  }

  .text-info {
    color: var(--vp-c-text-2);
    font-size: 0.8rem;
  }

  .text-tips {
    color: var(--vp-c-text-3);
    font-size: 0.8rem;
  }

  .item {
    padding: 10px;

    .item-main {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .default-value {
        font-size: 0.8rem;
      }
    }

    &:not(:first-child) {
      border-top: solid 1px var(--vp-c-divider);
    }

    .description {
      padding: 0 6px;
    }
  }
}
</style>