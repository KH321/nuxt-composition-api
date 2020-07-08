<template>
  <div class="container">
    <div>
      your color scheme: {{ color }}
    </div>
    <div>
      {{ count }}
      {{ x }}
      {{ y }}
    </div>
    <H1>title</H1>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import { useMouse, usePreferredColorScheme, useLocalStorage } from '@vueuse/core'

export default defineComponent({
  setup() {
    const state = reactive({
      count: 0
    })
    return {
      color: usePreferredColorScheme(),
      ...state,
      ...useMouse()
    }
  }
})
</script>

<style>
.container {
  margin: 4rem;
  min-height: 100vh;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
