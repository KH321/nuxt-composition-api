<template>
  <div
    class="editor-container"
    :style="bgColor"
  >
    <MonacoEditor
      ref="editor"
      v-model="state.code"
      class="editor"
      :language="options.language"
      :options="options"
      :theme=theme
      @change="change"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, unref } from '@vue/composition-api'
import MonacoEditor from 'vue-monaco'
import { usePreferredColorScheme } from '@vueuse/core'

enum ColorScheme {
  dark = 'dark',
  light = 'light'
}

enum vsScheme {
  dark = 'vs-dark',
  light = 'vs'
}

export default defineComponent({
  components: {
    MonacoEditor
  },
  setup () {
    const color = usePreferredColorScheme()
    const isDark = unref(computed(() => color.value === ColorScheme.dark))
    const theme = computed(() => isDark ? vsScheme.dark : vsScheme.light)
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
    const language = 'css'
    return {
      change,
      state,
      bgColor,
      theme,
      options: {
        minimap: {
          enabled: false
        },
        language
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.editor {
  width: 100%;
  height: 200px;

  &-container {
    padding: 10px 0;
    border-radius: 6px;
  }
}
</style>
