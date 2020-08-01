<template>
  <MonacoEditor
    ref="editor"
    v-model="state.code"
    class="editor"
    theme="vs-dark"
    :language="options.language"
    :options="options"
    @change="change"
  />
</template>

<script>
import { defineComponent, reactive } from '@vue/composition-api'
import MonacoEditor from 'vue-monaco'

export default defineComponent({
  components: {
    MonacoEditor
  },
  setup () {
    const change = (val) => {
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
      options: {
        language
      }
    }
  }
})
</script>

<style>
.editor {
  width: 800px;
  height: 600px;
}
</style>
