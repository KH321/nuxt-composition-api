<template>
  <div class="container">
    <div>
      your color scheme: {{ color }}
    </div>
    <H1>title</H1>
    <div>
      <!-- {{ x }} -->
      <!-- {{ y }} -->
      {{ mouse }}
    </div>
    <div> 
      <h1>count: {{ count }}</h1> 
      <button @click="inc()">Increment</button> 
      <button @click="dec()">Decrement</button> 
      <button @click="inc(5)">Increment (+5)</button> 
      <button @click="dec(5)">Decrement (-5)</button> 
      <button @click="set(100)">Set (100)</button> 
      <button @click="reset()">Reset</button> 
    </div> 
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import { useMouse, usePreferredColorScheme, useStorage, useCounter } from '@vueuse/core'

export default defineComponent({
  setup() {
    const mouse = useStorage('mouse', useMouse())
    const { count, inc, dec, set, reset } = useCounter() 
    return {
      color: usePreferredColorScheme(),
      mouse,
      ...useCounter()
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
