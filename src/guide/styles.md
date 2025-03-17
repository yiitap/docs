# Styles

## Default
The default style file exported by Yiitap is located at `@yiitap/vue/dist/vue.css`.

If you use Yiitap without any errors but notice that the styles are not displaying correctly, it might be because the style file has not been imported properly. Here's how you can do it:

```vue
<script setup lang="ts">
import '@yiitap/vue/dist/vue.css';
</script>
```

## Theme Styles
Yiitap supports both light and dark modes, implemented using the following CSS variables. 

If these styles don't align with your theme, you can override these variables to match your theme's color scheme.

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