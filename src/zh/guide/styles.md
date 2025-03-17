# 样式

## 默认
Yiitap 默认导出的样式文件位于 `@yiitap/vue/dist/vue.css`。

如果使用 Yiitap 时，没有任何报错，但样式显示混乱，可能就是没有正常导入样式文件。如下：
```vue
<script setup lang="ts">
import '@yiitap/vue/dist/vue.css';
</script>
```

## 主题样式
Yiitap 支持浅色和深色主题，是基于以下 CSS 变量来实现的。如果这些样式与你的主题不协调，那可以通过覆盖这些变量来实现与你主题一致的配色。
```scss
:root {
	--yii-color: #2c3e50;
	--yii-bg-color: #ffffff;
	--yii-color-accent: rgb(0, 0, 0);
	--yii-tips-color: rgba(0,0,0,0.5);
	--yii-caption-color: rgba(0,0,0,0.3);
	--yii-active-bg-color: rgba(0,0,0,0.05);
	--yii-divider-bg-color: rgba(0,0,0,0.1);
	--yii-hover-bg-color: rgba(0,0,0,0.1);
	--yii-tips-bg-color: rgba(0,0,0,0.03);
	--yii-blockquote-color: rgba(0, 0, 0, 0.8);
	--yii-blockquote-bg-color: rgba(0, 0, 0, 0.03);
	--yii-blockquote-border-color: rgba(0, 0, 0, 0.1);
	--yii-border-color: rgba(0,0,0,0.08);
	--yii-code-bg-color: rgba(0, 0, 0, 0.1);
	--yii-pre-color: #000000;
	--yii-pre-bg-color: #f6f6f7;
	--yii-pre-tool-bg-color: rgba(0, 0, 0, 0.05);
	--yii-table-focus-bg-color: var(--yii-active-bg-color);
	--yii-table-th-bg-color: var(--yii-tips-bg-color);
	--yii-table-border-color: #c2c2c4;
	--yii-table-handler-bg-color: rgba(33, 114, 224, 0.2); // aliceblue
	--yii-tippy-popover-bg-color: #ffffff;
	--yii-tippy-tooltip-color: #ffffff;
	--yii-tippy-tooltip-bg-color: #333333;
}

:root:has(*[data-theme="dark"]) {
	--yii-color: rgb(191, 195, 217);
	--yii-color-accent: rgb(255, 255, 255);
	--yii-bg-color: #1e2136;
  --yii-tips-color: rgba(255, 255, 255, 0.5);
	--yii-caption-color: rgba(255, 255, 255, 0.3);
	--yii-active-bg-color: rgba(255, 255, 255, 0.05);
	--yii-divider-bg-color: rgba(255, 255, 255, 0.1);
	--yii-hover-bg-color: rgba(255, 255, 255, 0.1);
	--yii-tips-bg-color: rgba(255, 255, 255, 0.03);
	--yii-blockquote-color: rgba(255, 255, 255, 0.8)!important;
	--yii-blockquote-bg-color: rgba(255, 255, 255, 0.03);
	--yii-blockquote-border-color: rgba(255, 255, 255, 0.1);
	--yii-border-color: rgba(255, 255, 255, 0.08);
	--yii-code-bg-color: rgba(255, 255, 255, 0.1);
	--yii-pre-color: #000000;
	--yii-pre-bg-color: rgba(255, 255, 255, 0.05);
	--yii-pre-tool-bg-color: rgba(255, 255, 255, 0.08);
	--yii-table-border-color: rgba(255, 255, 255, 0.15);
	--yii-table-handler-bg-color: rgba(33, 114, 224, 0.2);
	--yii-tippy-popover-bg-color: #2c2c32; // #1e2136, #2c2c32
	--yii-tippy-tooltip-color: #000000;
	--yii-tippy-tooltip-bg-color: #eeeeee;
}
```