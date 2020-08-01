<template>
  <MonacoEditor
    ref="editor"
    height="500"
    language="css"
    theme="vs-dark"
    width="800"
    :options="options"
    @change="change"
  />
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import MonacoEditor from 'monaco-editor-vue'

export default defineComponent({
  components: {
    MonacoEditor
  },
  setup () {
    const change = (val) => {
      console.log(val)
    }
    return {
      change,
      options: {
        accessibilitySupport: 'off',
        quickSuggestionsquickSuggestions: true,
        showSnippets: true
      }
    }
  }
})
</script>
