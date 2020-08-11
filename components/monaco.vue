<script lang="ts">
import { defineComponent, reactive, computed, unref } from '@vue/composition-api'
import MonacoEditor from 'vue-monaco'
import { usePreferredColorScheme } from '@vueuse/core'

enum ColorScheme {
  dark = 'dark',
  light = 'light'
}

enum VsScheme {
  dark = 'vs-dark',
  light = 'vs'
}

const Language = 'css'

export default defineComponent({
  components: {
    MonacoEditor
  },
  setup () {
    const color = usePreferredColorScheme()
    const isDark = unref(computed(() => color.value === ColorScheme.dark))
    const theme = computed(() => isDark ? VsScheme.dark : VsScheme.light)
    const bgColor = computed(() => ({
      background: isDark ? '#1e1e1e' : 'white',
      border: `1px solid ${isDark ? 'transparent' : '#eee'}`
    }))
    const change = (val: any) => {
      console.log(val)
    }
    const state = reactive({
      code: `.item {
    flex: auto;
}`
    })
    return {
      change,
      state,
      bgColor,
      theme,
      options: {
        automaticLayout: true,
        minimap: {
          enabled: false
        },
        language: Language
      }
    }
  }
})
</script>

<template>
  <div
    class="editor-container"
    :style="bgColor"
  >
    <monaco-editor
      ref="editor"
      v-model="state.code"
      class="editor"
      width="500"
      :language="options.language"
      :options="options"
      :theme=theme
      @change="change"
    />
  </div>
</template>

<style lang="scss" scoped>
.editor {
  height: 200px;

  &-container {
    padding: 10px 0;
    border-radius: 6px;
  }
}
</style>
